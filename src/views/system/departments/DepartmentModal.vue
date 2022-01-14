<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="submit">
    <BasicForm @register="registerForm" @submit="handleSubmit" ref="formRef" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormActionType, useForm } from '/@/components/Form/index';
  import { formSchema, organizationIdSchema } from './department.data';
  import { createDepartment, loadDepartmentById, updateDepartment } from '/@/api/system';
  import { cloneDeep, merge } from 'lodash-es';
  import { parentIdSchema } from '/@/views/system/departments/department.data';

  export default defineComponent({
    name: 'OrganizationModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const formRef = ref<Nullable<FormActionType>>(null);
      const isUpdate = ref(true);
      const organizationId = ref('');
      const parentId = ref('');
      const rowId = ref('');
      const [registerForm, { setFieldsValue, resetFields, submit, updateSchema }] = useForm({
        labelWidth: 120,
        schemas: formSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
        baseColProps: { lg: 12, md: 24 },
      });

      function updateParentSchema(e: any) {
        let parentIdField = cloneDeep(parentIdSchema);
        merge(parentIdField, {
          componentProps: {
            params: {
              search_organizationId: e,
            },
          },
        });
        updateSchema(parentIdField);
      }

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        let organizationIdField = cloneDeep(organizationIdSchema);
        merge(organizationIdField, {
          componentProps: {
            onChange: (organizationId: any) => {
              updateParentSchema(organizationId);
              setFieldsValue({ parent: { id: null } });
            },
          },
        });
        await updateSchema([organizationIdField]);
        setModalProps({ confirmLoading: false, width: '50%' });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          const record = await loadDepartmentById(data.record.id);
          rowId.value = record.id;
          await updateParentSchema(record.organization.id);
          await setFieldsValue(record);
        } else {
          organizationId.value = data?.organizationId;
          parentId.value = data?.departmentId;
          await updateParentSchema(organizationId.value);
          await setFieldsValue({
            organization: {
              id: organizationId.value,
            },
            parent: {
              id: parentId.value,
            },
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增部门' : '编辑部门'));

      async function handleSubmit(data) {
        try {
          setModalProps({ confirmLoading: true });
          if (data.parent && data.parent.id == null) {
            data.parent = null;
          }
          if (unref(isUpdate)) {
            await updateDepartment(rowId.value, data);
          } else {
            await createDepartment(data);
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...data, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { formRef, registerModal, registerForm, getTitle, submit, handleSubmit };
    },
  });
</script>
