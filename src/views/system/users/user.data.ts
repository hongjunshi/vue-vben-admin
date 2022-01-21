import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Time } from '/@/components/Time';
import { useI18n } from '/@/hooks/web/useI18n';
import { getDictionaryItems, getEnum, getEnumItems } from '/@/api/system/utils';
import { departmentsTree, listAllDuties, listAllRoles, organizationsTree } from '/@/api/system';

export const { t } = useI18n();

const isEnableEnums: any[] = getEnum({ type: 'IsEnable' });

export const columns: BasicColumn[] = [
  {
    title: '账号',
    dataIndex: 'username',
    width: 100,
    align: 'left',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'left',
    width: 100,
  },
  {
    title: '所属组织机构',
    dataIndex: 'organization.name'.split('.'),
    align: 'left',
  },
  {
    title: '所属部门',
    dataIndex: 'department.name'.split('.'),
    align: 'left',
    width: 100,
  },
  {
    title: '手机号码',
    dataIndex: 'mobile',
    width: 110,
    align: 'left',
  },
  {
    title: '电子邮件',
    dataIndex: 'email',
    align: 'left',
  },
  {
    title: '是否启用',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.isEnable;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = isEnableEnums.find((i) => i.value === record.isEnable)?.name;
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 160,
    customRender: ({ record }) => {
      return h(Time, { value: record.createTime, mode: 'datetime' });
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'search_username',
    label: '账号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'search_name',
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'search_mobile',
    label: '手机号码',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'search_email',
    label: '电子邮件',
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

export const organizationIdSchema: FormSchema = {
  field: 'organization.id'.split('.'),
  label: '所属组织机构',
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
export const departmentIdSchema: FormSchema = {
  field: 'department.id'.split('.'),
  label: '所属部门',
  component: 'ApiTreeSelect',
  // required: true,
  componentProps: {
    api: departmentsTree,
    fieldNames: {
      label: 'name',
      key: 'id',
      value: 'id',
    },
    params: {
      search_organizationId: '-1',
    },
    getPopupContainer: () => document.body,
  },
};
export const confirmPasswordCreateSchema: FormSchema = {
  field: 'password',
  label: '确认密码',
  component: 'InputPassword',
  dynamicRules: ({ values }) => {
    return [
      {
        required: true,
        validator: (_, value) => {
          if (!value) {
            return Promise.reject('请输入确认密码');
          }
          if (value !== values.plainPassword) {
            return Promise.reject('密码和确认密码不一致');
          }
          return Promise.resolve();
        },
      },
    ];
  },
};
export const passwordCreateSchema: FormSchema = {
  field: 'plainPassword',
  label: '密码',
  component: 'StrengthMeter',
  rules: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
};
export const passwordUpdateSchema: FormSchema = {
  field: 'plainPassword',
  label: '密码',
  component: 'StrengthMeter',
  componentProps: {
    placeholder: '不修改请留空',
  },
  rules: [],
};
export const confirmPasswordUpdateSchema: FormSchema = {
  field: 'password',
  label: '确认密码',
  component: 'InputPassword',
  dynamicRules: ({ values }) => {
    return [
      {
        validator: (_, value) => {
          if (values.plainPassword) {
            if (!value) {
              return Promise.reject('请输入确认密码');
            }
            if (value !== values.plainPassword) {
              return Promise.reject('密码和确认密码不一致');
            }
          }
          return Promise.resolve();
        },
      },
    ];
  },
};
export const formSchema: FormSchema[] = [
  {
    field: 'username',
    label: '账号',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    required: true,
  },
  organizationIdSchema,
  departmentIdSchema,
  passwordCreateSchema,
  confirmPasswordCreateSchema,
  {
    field: 'gender.code'.split('.'),
    label: '性别',
    component: 'ApiSelect',
    componentProps: {
      api: getDictionaryItems,
      params: {
        code: 'GENDER',
      },
      labelField: 'name',
      valueField: 'code',
      immediate: true,
    },
    required: true,
  },
  {
    field: 'mobile',
    label: '手机号码',
    component: 'Input',
    required: true,
  },
  {
    field: 'email',
    label: '电子邮件',
    component: 'Input',
    required: true,
  },
  {
    field: 'duties',
    label: '岗位',
    component: 'ApiTreeSelect',
    componentProps: {
      api: listAllDuties,
      resultField: 'data.content',
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      treeCheckable: true,
      maxTagCount: 4,
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'roles',
    label: '角色',
    component: 'ApiTreeSelect',
    componentProps: {
      api: listAllRoles,
      resultField: 'data',
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      treeCheckable: true,
      maxTagCount: 4,
      getPopupContainer: () => document.body,
    },
  },
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
