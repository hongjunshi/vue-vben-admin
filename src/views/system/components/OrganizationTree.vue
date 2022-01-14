<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="组织机构"
      toolbar
      search
      :clickRowToExpand="false"
      :treeData="treeData"
      @select="handleSelect"
      ref="treeRef"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, PropType, ref, unref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { departmentsTree, organizationsTree } from '/@/api/system';
  import { DepartmentEntity, OrganizationEntity } from '/@/api/system/types';
  import { OrganizationNodeType, OrganizationSelectedNode, OrganizationTreeType } from './types';

  export default defineComponent({
    name: 'OrganizationTree',
    components: {
      BasicTree,
    },
    props: {
      type: {
        type: Number as PropType<OrganizationTreeType>,
        default: OrganizationTreeType.ORGANIZATION,
      },
      expandAll: {
        type: Boolean as PropType<Boolean>,
        default: false,
      },
    },
    emits: ['select'],
    setup(props, { emit }) {
      const treeData = ref<TreeItem[]>([]);
      async function reload() {
        let data: TreeItem[] = [];
        if (props.type !== OrganizationTreeType.DEPARTMENT) {
          let organizations = await organizationsTree({});
          data = transformOrganization(organizations);
        } else {
          let departments = await departmentsTree({});
          data = transformDepartment(departments);
        }
        treeData.value = data;
      }

      function transformOrganization(data: OrganizationEntity[]) {
        return data.map((item) => {
          return {
            ...item,
            type: OrganizationNodeType.ORGANIZATION,
            key: '$' + OrganizationNodeType.ORGANIZATION + '_' + item.id,
            title: item.name,
            icon: 'organization|svg',
            children: [
              ...transformOrganization(item.children || []),
              ...(props.type !== OrganizationTreeType.ORGANIZATION
                ? transformDepartment(item.departments || [])
                : []),
            ],
          };
        });
      }

      function transformDepartment(data: DepartmentEntity[]) {
        return data.map((item) => {
          return {
            ...item,
            type: OrganizationNodeType.DEPARTMENT,
            key: '$' + OrganizationNodeType.DEPARTMENT + '_' + item.id,
            title: item.name,
            icon: 'department|svg',
            children: [...transformDepartment(item.children || [])],
          };
        });
      }

      function getAllSelectKeys(node, type) {
        return [
          node.id,
          ...node?.children
            .filter((item) => item.type === type)
            .flatMap((item) => [...getAllSelectKeys(item, type)]),
        ];
      }
      function handleSelect(keys, e) {
        const node = unref(e.node);
        const type = node.type;
        const ids: string[] = getAllSelectKeys(node, type);
        const selectedNode: OrganizationSelectedNode = {
          type: node.type,
          node: {
            organizationId:
              type === OrganizationNodeType.DEPARTMENT ? node.organization.id : node.id,
            departmentId: type === OrganizationNodeType.DEPARTMENT ? node.id : undefined,
          },
          key: node.id,
          keys: ids,
        };
        emit('select', selectedNode);
      }

      onMounted(() => {
        reload();
      });
      return { treeData, handleSelect, reload };
    },
  });
</script>
