<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="submit">
    <BasicForm @register="registerForm" @submit="handleSubmit" ref="formRef" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormActionType, useForm } from '/@/components/Form/index';
  import {
    confirmPasswordCreateSchema,
    confirmPasswordUpdateSchema,
    departmentIdSchema,
    formSchema,
    organizationIdSchema,
    passwordCreateSchema,
    passwordUpdateSchema,
  } from './user.data';
  import { createUser, loadUserById, updateUser } from '/@/api/system';
  import { cloneDeep, merge } from 'lodash-es';

  export default defineComponent({
    name: 'UserModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const formRef = ref<Nullable<FormActionType>>(null);
      const isUpdate = ref(true);
      const organizationId = ref('');
      const departmentId = ref('');
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

      function updateDepartmentSchema(e: any) {
        let departmentIdField = cloneDeep(departmentIdSchema);
        merge(departmentIdField, {
          componentProps: {
            params: {
              search_organizationId: e,
            },
          },
        });
        updateSchema(departmentIdField);
      }

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false, width: '50%' });
        await resetFields();
        let organizationIdField = cloneDeep(organizationIdSchema);
        merge(organizationIdField, {
          componentProps: {
            onChange: (organizationId: any) => {
              updateDepartmentSchema(organizationId);
              setFieldsValue({ department: { id: null } });
            },
          },
        });
        await updateSchema([organizationIdField]);
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          const record = await loadUserById(data.record.id);
          rowId.value = record.id;
          await updateDepartmentSchema(record.organization.id);

          await updateSchema([passwordUpdateSchema, confirmPasswordUpdateSchema]);
          await setFieldsValue({
            ...record,
            roles: record.roles ? record.roles.map((item) => item.id) : [],
            duties: record.duties ? record.duties.map((item) => item.id) : [],
          });
        } else {
          organizationId.value = data?.organizationId;
          departmentId.value = data?.departmentId;

          await updateSchema([passwordCreateSchema, confirmPasswordCreateSchema]);
          if (organizationId.value) {
            await updateDepartmentSchema(organizationId.value);
            await setFieldsValue({ organization: { id: organizationId.value } });
          }
          if (departmentId.value) {
            await setFieldsValue({ department: { id: departmentId.value } });
          }
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增用户' : '编辑用户'));

      async function handleSubmit(data) {
        try {
          setModalProps({ confirmLoading: true });
          data = {
            ...data,
            roles: data.roles.map((i) => {
              return { id: i };
            }),
            duties: data.duties.map((i) => {
              return { id: i };
            }),
          };
          if (unref(isUpdate)) {
            await updateUser(rowId.value, data);
          } else {
            await createUser(data);
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
