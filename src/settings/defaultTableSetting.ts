export default {
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
  bordered: true,
  showIndexColumn: false,
  canResize: false,
};
