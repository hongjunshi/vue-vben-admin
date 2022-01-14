<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="submit">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #permissions="{ model, field }">
        <BasicTree
          ref="permissionTreeRef"
          checkable
          :style="{ height: `${permissionTreeData.length * 28}px`, overflow: 'auto' }"
          :treeData="permissionTreeData"
          :fieldNames="{ key: 'id' }"
          :checkedKeys="model[field]"
          @check="
            (checkedKeys, e) => {
              handlePermissions(checkedKeys, e, model, field);
            }
          "
        >
          <template #title="{ title }">
            {{ t(title) }}
          </template>
        </BasicTree>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { BasicTree, TreeActionType } from '/@/components/Tree/index';

  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './role.data';
  import { createRole, listPermissionsTree, loadRoleById, updateRole } from '/@/api/system';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    name: 'RoleModal',
    components: { BasicModal, BasicForm, BasicTree },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();
      const isUpdate = ref(true);
      const rowId = ref('');
      const permissionTreeData = ref<any[]>([]);
      const halfCheckPermissionKeys = ref<string[]>([]);
      const permissionTreeRef = ref<Nullable<TreeActionType>>(null);

      function getPermissionTree() {
        const permissionTree = unref(permissionTreeRef);
        if (!permissionTree) {
          throw new Error('permission tree is null!');
        }
        return permissionTree;
      }

      function getPermissions(data) {
        const permissions = data.permissions
          ? data.permissions.map((id) => {
              return {
                id,
                isHalfCheck: 0,
              };
            })
          : [];
        unref(halfCheckPermissionKeys).forEach((id) => permissions.push({ id, isHalfCheck: 1 }));
        return permissions;
      }

      (async () => {
        const permissions = await listPermissionsTree({});
        permissionTreeData.value.push(...permissions);
      })();
      const [registerForm, { setFieldsValue, resetFields, validate, submit }] = useForm({
        labelWidth: 120,
        schemas: formSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
        baseColProps: { lg: 12, md: 24 },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        //重置折叠状态
        getPermissionTree().expandAll(false);
        setModalProps({ confirmLoading: false, width: '50%' });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          const record = await loadRoleById(data.record.id);
          rowId.value = record.id;
          await setFieldsValue({
            ...record,
            ...{
              permissions: record.permissions ? record.permissions.map((item) => item.code) : [],
            },
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增角色' : '编辑角色'));

      function handlePermissions(checkedKeys, e, model, field) {
        console.log(checkedKeys, e);
        model[field] = checkedKeys;
        halfCheckPermissionKeys.value = e.halfCheckedKeys ? e.halfCheckedKeys : [];
      }

      async function handleSubmit(data) {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          data = {
            ...data,
            permissions: getPermissions(data),
          };
          console.log(JSON.stringify(data));
          if (unref(isUpdate)) {
            await updateRole(rowId.value, data);
          } else {
            await createRole(data);
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        t,
        permissionTreeData,
        permissionTreeRef,
        halfCheckPermissionKeys,
        registerModal,
        registerForm,
        getTitle,
        submit,
        handlePermissions,
        handleSubmit,
      };
    },
  });
</script>
