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
export function getEnum(params: GetEnumItemsParam) {
  const items: any[] = [];
  listEnumItemsByType(params.type).then((result) => items.push(...result));
  return items;
}

interface GetDictionaryItemsParam {
  code: string;
}

export async function getDictionaryItems(params: GetDictionaryItemsParam) {
  return await listDictionaryTypeItemsByCode(params.code);
}
export function getDictionary(params: GetDictionaryItemsParam) {
  const items: any[] = [];
  listDictionaryTypeItemsByCode(params.code).then((result) => items.push(...result));
  return items;
}
