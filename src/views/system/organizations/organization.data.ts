import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Time } from '/@/components/Time';
import { useI18n } from '/@/hooks/web/useI18n';
import { getEnum, getEnumItems } from '/@/api/system/utils';
import { organizationsTree } from '/@/api/system';

export const { t } = useI18n();

const isEnableEnums: any[] = getEnum({ type: 'IsEnable' });

export const columns: BasicColumn[] = [
  {
    title: '组织机构代码',
    dataIndex: 'code',
    width: 150,
    align: 'left',
    sorter: true,
  },
  {
    title: '组织机构名称',
    dataIndex: 'name',
    align: 'left',
    sorter: true,
  },
  {
    title: '上级组织机构',
    dataIndex: 'parent.name'.split('.'),
    align: 'left',
    sorter: true,
  },
  {
    title: '是否启用',
    dataIndex: 'status',
    width: 90,
    customRender: ({ record }) => {
      const status = record.isEnable;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = isEnableEnums.find((i) => i.value === record.isEnable)?.name;
      return h(Tag, { color: color }, () => text);
    },
    sorter: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 160,
    customRender: ({ record }) => {
      return h(Time, { value: record.createTime, mode: 'datetime' });
    },
    sorter: true,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'search_code',
    label: '组织机构代码',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'search_name',
    label: '组织机构名称',
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
export const parentIdSchema: FormSchema = {
  field: 'parent.id'.split('.'),
  label: '上级组织机构',
  component: 'ApiTreeSelect',
  required: true,
  componentProps: {
    api: organizationsTree,
    fieldNames: {
      label: 'name',
      key: 'id',
      value: 'id',
    },
    getPopupContainer: () => document.body,
  },
};
export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '组织机构名称',
    component: 'Input',
    required: true,
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'code',
    label: '组织机构代码',
    required: true,
    component: 'Input',
  },
  parentIdSchema,
  {
    field: 'sortIndex',
    label: '排序',
    component: 'InputNumber',
    required: true,
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
];
