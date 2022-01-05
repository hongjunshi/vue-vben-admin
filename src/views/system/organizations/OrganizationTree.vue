<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="组织机构"
      toolbar
      search
      :clickRowToExpand="false"
      :treeData="treeData"
      :fieldNames="{ key: 'id', title: 'name' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { organizationsTree } from '/@/api/system';

  export default defineComponent({
    name: 'OrganizationTree',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);

      async function reload() {
        treeData.value = (await organizationsTree()) as unknown as TreeItem[];
      }

      function handleSelect(keys) {
        emit('select', keys[0]);
      }

      onMounted(() => {
        reload();
      });
      return { treeData, handleSelect, reload };
    },
  });
</script>
