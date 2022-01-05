import { usePermission } from '/@/hooks/web/usePermission';
import { merge } from 'lodash-es';
import { Props } from 'ant-design-vue/lib/form/useForm';
export interface SearchTableProps extends Props {
  searchPermissionCode: string;
}
const tableSetting = {
  // Form interface request general configuration
  // support xxx.xxx.xxx
  fetchSetting: {
    // The field name of the current page passed to the background
    pageField: 'pageNumber',
    // The number field name of each page displayed in the background
    sizeField: 'pageSize',
    // Field name of the form data returned by the interface
    listField: 'content',
    // Total number of tables returned by the interface field name
    totalField: 'totalElements',
  },
  striped: false,
  showTableSetting: true,
  tableSetting: {
    // 是否显示刷新按钮
    redo: true,
    // 是否显示尺寸调整按钮
    size: true,
    // 是否显示字段调整按钮
    setting: true,
    // 是否显示全屏按钮
    fullScreen: false,
  },
  bordered: true,
  // showIndexColumn: false,
  canResize: true,
};
function tableSearchSetting(auth: string) {
  const { hasPermission } = usePermission();
  const showButton = hasPermission(auth);
  return {
    formConfig: {
      showResetButton: showButton,
      showSubmitButton: showButton,
      showActionButtonGroup: showButton,
      autoSubmitOnEnter: true,
    },
    tableSetting: { redo: showButton },
  };
}
export function getTableSetting(searchTableProps: SearchTableProps) {
  return merge(
    {},
    tableSetting,
    tableSearchSetting(searchTableProps.searchPermissionCode),
    searchTableProps
  );
}
