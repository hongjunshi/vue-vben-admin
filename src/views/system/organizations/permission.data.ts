import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';
import { Time } from '/@/components/Time';
import { useI18n } from '/@/hooks/web/useI18n';
import { getEnumItems } from '/@/api/system/utils';
import { apiTree, listPermissionsTree } from '/@/api/system';
import { pinyin } from 'pinyin-pro';

export const { t } = useI18n();

const isEnableEnums = (await getEnumItems({ type: 'IsEnable' })) || [];
export const columns: BasicColumn[] = [
  {
    title: '功能名称',
    dataIndex: 'name',
    width: 250,
    align: 'left',
    customRender: ({ record }) => {
      return t(record.title);
    },
  },
  {
    title: '图标',
    dataIndex: 'icon',
    width: 50,
    customRender: ({ record }) => {
      return record.icon ? h(Icon, { icon: record.icon }) : undefined;
    },
  },
  {
    title: '权限标识',
    dataIndex: 'code',
    width: 250,
    align: 'left',
  },
  {
    title: '路由地址',
    dataIndex: 'url',
    align: 'left',
  },
  {
    title: '组件路径',
    dataIndex: 'component',
    align: 'left',
  },
  {
    title: '排序',
    dataIndex: 'sortIndex',
    width: 80,
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
    width: 150,
    customRender: ({ record }) => {
      return h(Time, { value: record.createTime, mode: 'datetime' });
    },
  },
];

const isCatalog = (type: number) => type === 0;
const isMenu = (type: number) => type === 1;
const isButton = (type: number) => type === 2;

export const searchFormSchema: FormSchema[] = [
  {
    field: 'search_code',
    label: '权限标识',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'search_component',
    label: '组件',
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
    field: 'type',
    label: '功能类型',
    component: 'ApiRadioGroup',
    defaultValue: 0,
    componentProps: {
      api: getEnumItems,
      params: {
        type: 'PermissionType',
      },
      labelField: 'name',
      valueField: 'value',
      isBtn: true,
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    helpMessage: ['显示标题', '如果支持国际化，请使用资源文件的Key'],
    required: true,
  },
  {
    field: 'name',
    label: '路由名称',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'code',
    label: '权限标识',
    required: true,
    component: 'Input',
  },
  {
    field: 'parent.id'.split('.'),
    label: '上级',
    component: 'ApiTreeSelect',
    componentProps: {
      api: listPermissionsTree,
      params: {
        search_types: [0, 1],
      },
      fieldNames: {
        label: 'title',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    renderComponentContent: () => {
      return {
        title: ({ title }) => t(title),
      };
    },
  },

  {
    field: 'sortIndex',
    label: '排序',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'icon',
    label: '图标',
    component: 'IconPicker',
    ifShow: ({ values }) => !isButton(values.type),
  },

  {
    field: 'url',
    label: '路由地址',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'component',
    label: '组件路径',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'redirect',
    label: '重定向路由地址',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => isCatalog(values.type),
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'meta.frameSrc'.split('.'),
    label: '页面地址',
    component: 'Input',
    ifShow: ({ values }) => !isButton(values.type) && values.component === 'IFrame',
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
    field: 'meta.hideChildrenInMenu'.split('.'),
    label: '是否隐藏子菜单',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    ifShow: ({ values }) => isCatalog(values.type),
  },

  {
    field: 'meta.ignoreKeepAlive'.split('.'),
    label: '是否禁止缓存',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'meta.hideMenu'.split('.'),
    label: '是否隐藏',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'meta.carryParam'.split('.'),
    label: '是否带参',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'meta.hidePathForChildren'.split('.'),
    label: '是否隐藏本级路径',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    ifShow: ({ values }) => isCatalog(values.type),
  },
  {
    field: 'meta.ignoreRoute'.split('.'),
    label: '是否忽略路由',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'meta.currentActiveMenu'.split('.'),
    label: '当前活动路由',
    component: 'Input',
    ifShow: ({ values }) => isMenu(values.type) && values.meta.hideMenu,
  },

  {
    field: 'apis',
    label: '接口列表',
    component: 'ApiTreeSelect',
    componentProps: {
      api: apiTree,
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      treeCheckable: true,
      maxTagCount: 4,
      filterTreeNode: (inputValue: string, treeNode: any) => {
        const title = pinyin(treeNode?.title, { toneType: 'none' }).toLowerCase();
        const value = pinyin(inputValue, { toneType: 'none' }).replace("'", ' ').toLowerCase();
        return title.indexOf(value) > -1;
      },
      getPopupContainer: () => document.body,
    },
    ifShow: ({ values }) => !isCatalog(values.type),
    colProps: { lg: 24, md: 24 },
  },
];
