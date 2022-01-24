import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Time } from '/@/components/Time';
import { useI18n } from '/@/hooks/web/useI18n';
import { getDictionaryItems, getEnum, getEnumItems } from '/@/api/system/utils';

export const { t } = useI18n();
const isEnableEnums: any[] = getEnum({ type: 'IsEnable' });
const isSystemEnums: any[] = getEnum({ type: 'IsSystem' });

export const columns: BasicColumn[] = [
  {
    title: '角色名称',
    dataIndex: 'name',
    align: 'left',
    sorter: true,
  },
  {
    title: '角色代码',
    dataIndex: 'code',
    width: 200,
    align: 'left',
    sorter: true,
  },
  {
    title: '角色级别',
    dataIndex: 'level.name'.split('.'),
    align: 'left',
    width: 100,
    sorter: true,
  },
  {
    title: '描述',
    dataIndex: 'description',
    align: 'left',
    sorter: true,
  },
  {
    title: '是否预置',
    dataIndex: 'isSystem',
    width: 90,
    customRender: ({ record }) => {
      const isSystem = record?.isSystem;
      const system = ~~isSystem === 1;
      const color = system ? 'green' : 'red';
      const text = isSystemEnums.find((i) => i.value === isSystem)?.name;
      return h(Tag, { color: color }, () => text);
    },
    sorter: true,
  },
  {
    title: '是否启用',
    dataIndex: 'status',
    width: 90,
    customRender: ({ record }) => {
      const isEnable = record?.isEnable;
      const enable = ~~isEnable === 1;
      const color = enable ? 'green' : 'red';
      const text = isEnableEnums.find((i) => i.value === isEnable)?.name;
      return h(Tag, { color: color }, () => text);
    },
    sorter: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 160,
    align: 'center',
    customRender: ({ record }) => {
      return h(Time, { value: record.createTime, mode: 'datetime' });
    },
    sorter: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'search_name',
    label: '角色名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'search_code',
    label: '角色代码',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'search_isEnable',
    label: '是否启用',
    component: 'ApiSelect',
    componentProps: {
      api: getEnumItems,
      params: {
        type: 'IsEnable',
      },
      labelField: 'name',
      valueField: 'value',
      immediate: true,
    },
    colProps: { span: 8 },
  },
];
export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '角色名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'code',
    label: '角色代码',
    component: 'Input',
    required: true,
  },
  {
    field: 'level.code'.split('.'),
    label: '角色级别',
    component: 'ApiSelect',
    componentProps: {
      api: getDictionaryItems,
      params: {
        code: 'ROLE-LEVEL',
      },
      labelField: 'name',
      valueField: 'code',
      immediate: true,
    },
    required: true,
  },
  {
    field: 'isSystem',
    label: '是否预置',
    component: 'ApiRadioGroup',
    defaultValue: 0,
    componentProps: {
      api: getEnumItems,
      params: {
        type: 'IsSystem',
      },
      labelField: 'name',
      valueField: 'value',
      immediate: true,
      isBtn: true,
    },
  },
  {
    field: 'isEnable',
    label: '是否启用',
    component: 'ApiRadioGroup',
    defaultValue: 1,
    componentProps: {
      api: getEnumItems,
      params: {
        type: 'IsEnable',
      },
      labelField: 'name',
      valueField: 'value',
      immediate: true,
      isBtn: true,
    },
  },
  {
    field: 'description',
    label: '描述',
    component: 'InputTextArea',
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'permissions',
    component: 'TreeSelect',
    label: '权限',
    slot: 'permissions',
    colProps: { lg: 24, md: 24 },
    rules: [{ required: true, message: '请设置权限', type: 'array' }],
  },
];
