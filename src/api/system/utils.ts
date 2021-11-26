/**
 * 为了方便远程组件调用进行的封装
 */
import { listDictionaryTypeItemsByCode, listEnumItemsByType } from '/@/api/system/index';

interface GetEnumItemsParam {
  type: string;
}

export async function getEnumItems(params: GetEnumItemsParam) {
  return await listEnumItemsByType(params.type);
}

interface GetDictionaryItemsParam {
  code: string;
}

export async function getDictionaryItems(params: GetDictionaryItemsParam) {
  return await listDictionaryTypeItemsByCode(params.code);
}
