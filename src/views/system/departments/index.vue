<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <OrganizationTree
      class="w-1/4 xl:w-1/5"
      @select="handleSelect"
      ref="departmentTreeRef"
      :type="OrganizationTreeType.ORGANIZATION_AND_DEPARTMENT"
    />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'system:departments:create'"
          >新增部门
        </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              tooltip: '编辑部门',
              icon: 'clarity:note-edit-line',
              auth: 'system:departments:update',
              onClick: handleEdit.bind(null, record),
            },
            {
              tooltip: '删除部门',
              icon: 'ant-design:delete-outlined',
              auth: 'system:departments:delete',
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
    <DepartmentModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, unref } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import DepartmentModal from './DepartmentModal.vue';

  import { columns, searchFormSchema } from './department.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { RouteLocationRaw } from 'vue-router';
  import OrganizationTree from '../components/OrganizationTree.vue';
  import { deleteDepartmentById, listDepartments } from '/@/api/system';
  import { getTableSetting } from '/@/settings/defaultSetting';
  import {
    OrganizationNodeType,
    OrganizationSelectedNode,
    OrganizationTreeActionType,
    OrganizationTreeType,
  } from '../components/types';

  export default defineComponent({
    name: 'DepartmentManagement',
    components: {
      OrganizationTree,
      BasicTable,
      PageWrapper,
      DepartmentModal,
      TableAction,
    },
    setup() {
      const go = useGo();
      const departmentTreeRef = ref<Nullable<OrganizationTreeActionType>>(null);
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const currentOrganizationNode = reactive<Recordable>({});
      let tableProps = getTableSetting({
        searchPermissionCode: 'system:organizations:search',
        title: '部门列表',
        api: listDepartments,
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

      function getDepartmentTree() {
        const departmentTree = unref(departmentTreeRef);
        if (!departmentTree) {
          throw new Error('department tree is null!');
        }
        return departmentTree;
      }

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
          ...currentOrganizationNode,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteDepartmentById(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
        getDepartmentTree().reload();
      }

      function handleSelect(selectedNode: OrganizationSelectedNode) {
        searchInfo.search_organizationIds = undefined;
        searchInfo.search_organizationId = undefined;
        searchInfo.search_parentIds = undefined;
        searchInfo.search_parentId = undefined;
        if (selectedNode.type === OrganizationNodeType.ORGANIZATION) {
          selectedNode.keys.length > 1
            ? (searchInfo.search_organizationIds = selectedNode.keys)
            : (searchInfo.search_organizationId = selectedNode.keys[0]);
          currentOrganizationNode.organizationId = selectedNode.node.organizationId;
          currentOrganizationNode.departmentId = undefined;
        } else {
          selectedNode.keys.length > 1
            ? (searchInfo.search_parentIds = selectedNode.keys)
            : (searchInfo.search_parentId = selectedNode.keys[0]);
          currentOrganizationNode.organizationId = selectedNode.node.organizationId;
          currentOrganizationNode.departmentId = selectedNode.node.departmentId;
        }
        reload();
      }

      function handleView(record: Recordable) {
        go({ name: 'AccountDetailDemo', params: { id: record.id } } as RouteLocationRaw);
      }

      return {
        OrganizationTreeType,
        departmentTreeRef,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
        currentOrganizationNode,
      };
    },
  });
</script>
