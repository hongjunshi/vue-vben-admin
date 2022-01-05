<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'system:roles:create'">
          新增角色</a-button
        >
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              tooltip: '编辑角色',
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
              auth: 'system:roles:update',
            },
            {
              tooltip: '删除角色',
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
              auth: 'system:roles:delete',
            },
          ]"
        />
      </template>
    </BasicTable>
    <RoleModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { deleteRoleById, listRoles } from '/@/api/system';

  import RoleModal from './RoleModal.vue';

  import { columns, searchFormSchema } from './role.data';
  import { useModal } from '/@/components/Modal';
  import { getTableSetting } from '/@/settings/defaultSetting';
  export default defineComponent({
    name: 'RoleList',
    components: { BasicTable, RoleModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const tableProps = getTableSetting({
        searchPermissionCode: 'system:roles:search',
        title: '角色列表',
        api: listRoles,
        columns,
        useSearchForm: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });
      const [registerTable, { reload }] = useTable(tableProps);

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
        deleteRoleById(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
