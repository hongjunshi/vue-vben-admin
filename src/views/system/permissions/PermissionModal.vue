<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleOk">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema, parentIdSchema } from './permission.data';
  import { createPermission, loadPermissionById, updatePermission } from '/@/api/system';
  import { cloneDeep } from 'lodash-es';

  export default defineComponent({
    name: 'PermissionModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

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
        //更新Schema是为了刷新数据
        await updateSchema(cloneDeep(parentIdSchema));
        setModalProps({ confirmLoading: false, width: '50%' });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          const record = await loadPermissionById(data.record.id);
          rowId.value = record.id;
          await setFieldsValue({
            ...record,
            ...{
              apis: record.apis ? record.apis.map((item) => item.id) : [],
              meta: record.meta ? JSON.parse(record.meta) : {},
            },
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增功能' : '编辑功能'));

      async function handleOk() {
        await submit();
      }

      async function handleSubmit(data) {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          data = {
            ...data,
            apis: data.apis
              ? data.apis.map((id) => {
                  return {
                    id: id,
                  };
                })
              : [],
            meta: JSON.stringify(data.meta),
          };
          if (unref(isUpdate)) {
            await updatePermission(rowId.value, data);
          } else {
            await createPermission(data);
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleOk, handleSubmit };
    },
  });
</script>
