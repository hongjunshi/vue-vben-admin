<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="submit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './organization.data';
  import { createOrganization, loadOrganizationById, updateOrganization } from '/@/api/system';
  import { cloneDeep } from 'lodash-es';
  import { parentIdSchema } from '/@/views/system/organizations/organization.data';

  export default defineComponent({
    name: 'OrganizationModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const parentId = ref('');
      const [registerForm, { setFieldsValue, resetFields, validate, submit, updateSchema }] =
        useForm({
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
        await updateSchema(cloneDeep(parentIdSchema));
        setModalProps({ confirmLoading: false, width: '50%' });
        isUpdate.value = !!data?.isUpdate;
        parentId.value = data?.organizationId;

        if (unref(isUpdate)) {
          const record = await loadOrganizationById(data.record.id);
          rowId.value = record.id;
          await setFieldsValue(record);
        } else {
          if (parentId.value) {
            await setFieldsValue({ parent: { id: parentId.value } });
          }
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增组织机构' : '编辑组织机构'));

      async function handleSubmit(data) {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          if (unref(isUpdate)) {
            await updateOrganization(rowId.value, data);
          } else {
            await createOrganization(data);
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, submit, handleSubmit };
    },
  });
</script>
