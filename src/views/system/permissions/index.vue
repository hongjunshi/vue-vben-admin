<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'system:permissions:create'">
          新增功能
        </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              tooltip: '编辑功能',
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
              auth: 'system:permissions:update',
            },
            {
              tooltip: '删除功能',
              icon: 'ant-design:delete-outlined',
              color: 'error',
              auth: 'system:permissions:delete',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <PermissionModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { deletePermissionById, listPermissionsTree } from '/@/api/system';
  import PermissionModal from './PermissionModal.vue';

  import { columns, searchFormSchema } from './permission.data';
  import { useModal } from '/@/components/Modal';
  import { getTableSetting } from '/@/settings/defaultSetting';
  import { usePermission } from '/@/hooks/web/usePermission';

  export default defineComponent({
    name: 'PermissionManagement',
    components: { BasicTable, PermissionModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const { hasPermission } = usePermission();

      const tableProps = getTableSetting({
        searchPermissionCode: 'system:permissions:search',
        title: '功能列表',
        api: listPermissionsTree,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        isTreeTable: true,
        pagination: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
          ifShow: (_column) => {
            return hasPermission(['system:permissions:update', 'system:permissions:delete']);
          },
        },
      });
      const [registerTable, { reload, expandAll }] = useTable(tableProps);

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deletePermissionById(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      function onFetchSuccess() {
        // 演示默认展开所有表项
        nextTick(expandAll);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        onFetchSuccess,
      };
    },
  });
</script>
