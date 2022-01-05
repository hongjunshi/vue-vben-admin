<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <OrganizationTree class="w-1/4 xl:w-1/5" @select="handleSelect" ref="organizationTreeRef" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'system:organizations:create'"
          >新增组织机构</a-button
        >
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              tooltip: '编辑组织机构',
              icon: 'clarity:note-edit-line',
              auth: 'system:organizations:update',
              onClick: handleEdit.bind(null, record),
            },
            {
              tooltip: '删除组织机构',
              icon: 'ant-design:delete-outlined',
              auth: 'system:organizations:delete',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <OrganizationModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, unref } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import OrganizationModal from './OrganizationModal.vue';

  import { columns, searchFormSchema } from './organization.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { RouteLocationRaw } from 'vue-router';
  import OrganizationTree from './OrganizationTree.vue';
  import { listOrganizations, deleteOrganizationById } from '/@/api/system';
  import { getTableSetting } from '/@/settings/defaultSetting';
  import { OrganizationTreeActionType } from '/@/views/system/organizations/types';

  export default defineComponent({
    name: 'OrganizationManagement',
    components: { OrganizationTree, BasicTable, PageWrapper, OrganizationModal, TableAction },
    setup() {
      const go = useGo();
      const organizationTreeRef = ref<Nullable<OrganizationTreeActionType>>(null);
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      let tableProps = getTableSetting({
        searchPermissionCode: 'system:organizations:search',
        title: '组织机构列表',
        api: listOrganizations,
        rowKey: 'id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      const [registerTable, { reload }] = useTable(tableProps);

      function getOrganizationTree() {
        const organizationTree = unref(organizationTreeRef);
        if (!organizationTree) {
          throw new Error('organization tree is null!');
        }
        return organizationTree;
      }

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
        deleteOrganizationById(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
        getOrganizationTree().reload();
      }

      function handleSelect(parentId = '') {
        searchInfo.search_parentId = parentId;
        reload();
      }

      function handleView(record: Recordable) {
        go({ name: 'AccountDetailDemo', params: { id: record.id } } as RouteLocationRaw);
      }

      return {
        organizationTreeRef,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
      };
    },
  });
</script>
