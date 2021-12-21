/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { defHttp } from '/@/utils/http/axios';
import { RequestOptions } from '/#/axios';
import { overrideConfigs, overrideOptions } from './config';
import {
  ListApplicationsQueryParams,
  ListAllApplicationsQueryParams,
  ListDepartmentsQueryParams,
  DepartmentsTreeQueryParams,
  ListDictionariesQueryParams,
  ListDictionaryTypesQueryParams,
  ListDutiesQueryParams,
  ListApisQueryParams,
  ApiTreeQueryParams,
  ListOrganizationsQueryParams,
  ListPermissionsQueryParams,
  ListPermissionsTreeQueryParams,
  ListReservableConfigsQueryParams,
  ListResourcesQueryParams,
  ListAllResourcesQueryParams,
  ListRolesQueryParams,
  ListAllRolesQueryParams,
  ListUsersQueryParams,
  ApiEntity,
  ApplicationEntity,
  Attachment,
  AuditableEntity,
  Department,
  DepartmentEntity,
  DictionaryEntity,
  DictionaryTypeEntity,
  DutyEntity,
  OrganizationEntity,
  PermissionEntity,
  Principal,
  ResourceEntity,
  RestResult,
  RoleEntity,
  User,
  UserChangePasswordVO,
  UserEntity,
  Map_string_object_,
  Page_ApiEntity_,
  Page_ApplicationEntity_,
  Page_AuditableEntity_,
  Page_DepartmentEntity_,
  Page_DictionaryEntity_,
  Page_DictionaryTypeEntity_,
  Page_DutyEntity_,
  Page_OrganizationEntity_,
  Page_PermissionEntity_,
  Page_ResourceEntity_,
  Page_RoleEntity_,
  Page_UserEntity_,
  RequestBodyAuditableEntity,
  RequestBodyApiEntity,
  RequestBodyRoleEntity,
  RequestBodyApplicationEntity,
  RequestBodyDepartmentEntity,
  RequestBodyDictionaryEntity,
  RequestBodyDutyEntity,
  RequestBodyOrganizationEntity,
  RequestBodyPermissionEntity,
  RequestBodyResourceEntity,
  RequestBodyUserEntity,
  RequestBodyBatchDeleteUserByIdsBody,
} from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, 'i');
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

/**
 * 根据条件查询，支持分页、排序
 */
export const listApplications = (
  params: ListApplicationsQueryParams,
  options?: RequestOptions
): Promise<Page_ApplicationEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listApplications.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listApplications.key = '/applications';

/**
 * 创建
 */
export const createApplication = (
  body: RequestBodyApplicationEntity,
  options?: RequestOptions
): Promise<ApplicationEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createApplication.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createApplication.key = '/applications';

/**
 * 根据条件查询全部信息
 */
export const listAllApplications = (
  params: ListAllApplicationsQueryParams,
  options?: RequestOptions
): Promise<ApplicationEntity[]> => {
  return defHttp.get(
    overrideConfigs({
      url: listAllApplications.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listAllApplications.key = '/applications/all';

/**
 * 根据ID查询
 */
export const loadApplicationById = (
  /**
   * ID
   */
  id: string,
  options?: RequestOptions
): Promise<ApplicationEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadApplicationById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadApplicationById.key = '/applications/{id}';

/**
 * 更新全部信息
 */
export const updateApplication = (
  /**
   * ID
   */
  id: string,
  body: RequestBodyApplicationEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateApplication.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateApplication.key = '/applications/{id}';

/**
 * 根据ID删除
 */
export const deleteApplicationById = (
  /**
   * ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteApplicationById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteApplicationById.key = '/applications/{id}';

/**
 * 创建附件信息
 */
export const createAttachment = (
  body: {
    /**
     *
     * attachment
     * Format: binary
     */
    attachment: string;
  },
  options?: RequestOptions
): Promise<Attachment> => {
  return defHttp.post(
    overrideConfigs({
      url: createAttachment.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createAttachment.key = '/attachments';

/**
 * 根据条件查询部门，支持分页、排序
 */
export const listDepartments = (
  params: ListDepartmentsQueryParams,
  options?: RequestOptions
): Promise<Page_DepartmentEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listDepartments.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listDepartments.key = '/departments';

/**
 * 创建部门
 */
export const createDepartment = (
  body: DepartmentEntity,
  options?: RequestOptions
): Promise<DepartmentEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createDepartment.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createDepartment.key = '/departments';

/**
 * 根据条件查询部门信息，以树形结构返回
 */
export const departmentsTree = (
  params: DepartmentsTreeQueryParams,
  options?: RequestOptions
): Promise<Department[]> => {
  return defHttp.get(
    overrideConfigs({
      url: departmentsTree.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
departmentsTree.key = '/departments/tree';

/**
 * 根据ID查询部门
 */
export const loadDepartmentById = (
  /**
   * 部门ID
   */
  id: string,
  options?: RequestOptions
): Promise<DepartmentEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadDepartmentById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadDepartmentById.key = '/departments/{id}';

/**
 * 更新部门全部信息
 */
export const updateDepartment = (
  /**
   * 部门id
   */
  id: string,
  body: RequestBodyDepartmentEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateDepartment.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateDepartment.key = '/departments/{id}';

/**
 * 根据ID删除部门
 */
export const deleteDepartmentById = (
  /**
   * 部门ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteDepartmentById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteDepartmentById.key = '/departments/{id}';

/**
 * 更新部门部分信息
 */
export const updateDepartmentPatch = (
  /**
   * 部门id
   */
  id: string,
  body: RequestBodyDepartmentEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateDepartmentPatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateDepartmentPatch.key = '/departments/{id}';

/**
 * 停用部门
 */
export const disableDepartmentById = (
  /**
   * 部门id
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(disableDepartmentById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
disableDepartmentById.key = '/departments/{id}/disable';

/**
 * 启用部门
 */
export const enableDepartmentById = (
  /**
   * 部门id
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(enableDepartmentById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
enableDepartmentById.key = '/departments/{id}/enable';

/**
 * 根据条件查询字典，支持分页、排序
 */
export const listDictionaries = (
  params: ListDictionariesQueryParams,
  options?: RequestOptions
): Promise<Page_DictionaryEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listDictionaries.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listDictionaries.key = '/dictionaries';

/**
 * 创建字典
 */
export const createDictionary = (
  body: DictionaryEntity,
  options?: RequestOptions
): Promise<DictionaryEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createDictionary.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createDictionary.key = '/dictionaries';

/**
 * 根据ID查询字典
 */
export const loadDictionaryById = (
  /**
   * 字典ID
   */
  id: string,
  options?: RequestOptions
): Promise<DictionaryEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadDictionaryById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadDictionaryById.key = '/dictionaries/{id}';

/**
 * 更新字典全部信息
 */
export const updateDictionary = (
  /**
   * 字典id
   */
  id: string,
  body: RequestBodyDictionaryEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateDictionary.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateDictionary.key = '/dictionaries/{id}';

/**
 * 根据ID删除字典
 */
export const deleteDictionaryById = (
  /**
   * 字典ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteDictionaryById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteDictionaryById.key = '/dictionaries/{id}';

/**
 * 更新字典部分信息
 */
export const updateDictionaryPatch = (
  /**
   * 字典id
   */
  id: string,
  body: RequestBodyDictionaryEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateDictionaryPatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateDictionaryPatch.key = '/dictionaries/{id}';

/**
 * 根据条件查询字典类型，支持分页、排序
 */
export const listDictionaryTypes = (
  params: ListDictionaryTypesQueryParams,
  options?: RequestOptions
): Promise<Page_DictionaryTypeEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listDictionaryTypes.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listDictionaryTypes.key = '/dictionaryTypes';

/**
 * 创建字典分类
 */
export const createDictionaryType = (
  body: DictionaryTypeEntity,
  options?: RequestOptions
): Promise<DictionaryTypeEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createDictionaryType.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createDictionaryType.key = '/dictionaryTypes';

/**
 * 根据代码查询字典类型
 */
export const listDictionaryTypesByCode = (
  /**
   * 字典类型代码，逗号分隔
   */
  codes: undefined,
  options?: RequestOptions
): Promise<DictionaryTypeEntity[]> => {
  return defHttp.get(
    overrideConfigs({
      url: template(listDictionaryTypesByCode.key, { codes }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listDictionaryTypesByCode.key = '/dictionaryTypes/codes/{codes}';

/**
 * 根据代码查询字典类型
 */
export const listDictionaryTypeItemsByCode = (
  /**
   * 字典类型代码，逗号分隔
   */
  code: string,
  options?: RequestOptions
): Promise<DictionaryEntity[]> => {
  return defHttp.get(
    overrideConfigs({
      url: template(listDictionaryTypeItemsByCode.key, { code }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listDictionaryTypeItemsByCode.key = '/dictionaryTypes/{code}/items';

/**
 * 根据ID查询字典分类
 */
export const loadDictionaryTypeById = (
  /**
   * 字典分类ID
   */
  id: string,
  options?: RequestOptions
): Promise<DictionaryTypeEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadDictionaryTypeById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadDictionaryTypeById.key = '/dictionaryTypes/{id}';

/**
 * 更新字典分类全部信息
 */
export const updateDictionaryType = (
  /**
   * 字典id
   */
  id: string,
  body: DictionaryTypeEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateDictionaryType.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateDictionaryType.key = '/dictionaryTypes/{id}';

/**
 * 根据ID删除字典分类
 */
export const deleteDictionaryTypeById = (
  /**
   * 字典ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteDictionaryTypeById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteDictionaryTypeById.key = '/dictionaryTypes/{id}';

/**
 * 更新字典分类部分信息
 */
export const updateDictionaryTypePatch = (
  /**
   * 字典id
   */
  id: string,
  body: DictionaryTypeEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateDictionaryTypePatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateDictionaryTypePatch.key = '/dictionaryTypes/{id}';

/**
 * 根据条件查询岗位，支持分页、排序
 */
export const listDuties = (
  params: ListDutiesQueryParams,
  options?: RequestOptions
): Promise<Page_DutyEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listDuties.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listDuties.key = '/duties';

/**
 * 创建岗位
 */
export const createDuty = (body: DutyEntity, options?: RequestOptions): Promise<DutyEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createDuty.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createDuty.key = '/duties';

/**
 * 根据ID查询岗位
 */
export const loadDutyById = (
  /**
   * 岗位ID
   */
  id: string,
  options?: RequestOptions
): Promise<DutyEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadDutyById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadDutyById.key = '/duties/{id}';

/**
 * 更新岗位全部信息
 */
export const updateDuty = (
  /**
   * 岗位id
   */
  id: string,
  body: RequestBodyDutyEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateDuty.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateDuty.key = '/duties/{id}';

/**
 * 根据ID删除岗位
 */
export const deleteDutyById = (
  /**
   * 岗位ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteDutyById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteDutyById.key = '/duties/{id}';

/**
 * 更新岗位部分信息
 */
export const updateDutyPatch = (
  /**
   * 岗位id
   */
  id: string,
  body: RequestBodyDutyEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateDutyPatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateDutyPatch.key = '/duties/{id}';

/**
 * 查询全部枚举信息
 */
export const enumsAll = (
  options?: RequestOptions
): Promise<{ [x: string]: Map_string_object_[] }> => {
  return defHttp.get(
    overrideConfigs({
      url: enumsAll.key,
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
enumsAll.key = '/enums/all';

/**
 * 查询所有枚举类型信息
 */
export const listEnumTypes = (options?: RequestOptions): Promise<string[]> => {
  return defHttp.get(
    overrideConfigs({
      url: listEnumTypes.key,
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listEnumTypes.key = '/enums/types';

/**
 * 根据枚举类型查询枚举信息
 */
export const listEnumsByType = (
  /**
   * 枚举类型代码，逗号分隔
   */
  types: undefined,
  options?: RequestOptions
): Promise<Map_string_object_[]> => {
  return defHttp.get(
    overrideConfigs({
      url: template(listEnumsByType.key, { types }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listEnumsByType.key = '/enums/types/{types}';

/**
 * 根据枚举类型查询枚举信息
 */
export const listEnumItemsByType = (
  /**
   * 枚举类型代码
   */
  type: string,
  options?: RequestOptions
): Promise<Map_string_object_[]> => {
  return defHttp.get(
    overrideConfigs({
      url: template(listEnumItemsByType.key, { type }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listEnumItemsByType.key = '/enums/{type}/items';

/**
 * 根据条件查询后台接口，支持分页、排序
 */
export const listApis = (
  params: ListApisQueryParams,
  options?: RequestOptions
): Promise<Page_ApiEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listApis.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listApis.key = '/interfaces';

/**
 * 创建后台接口
 */
export const createApi = (body: ApiEntity, options?: RequestOptions): Promise<ApiEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createApi.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createApi.key = '/interfaces';

/**
 * 根据条件查询接口信息，以树形结构返回
 */
export const apiTree = (
  params: ApiTreeQueryParams,
  options?: RequestOptions
): Promise<ApiEntity[]> => {
  return defHttp.get(
    overrideConfigs({
      url: apiTree.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
apiTree.key = '/interfaces/tree';

/**
 * 根据ID查询后台接口
 */
export const loadApiById = (
  /**
   * 后台接口ID
   */
  id: string,
  options?: RequestOptions
): Promise<ApiEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadApiById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadApiById.key = '/interfaces/{id}';

/**
 * 更新后台接口全部信息
 */
export const updateApi = (
  /**
   * 后台接口id
   */
  id: string,
  body: RequestBodyApiEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateApi.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateApi.key = '/interfaces/{id}';

/**
 * 根据ID删除后台接口
 */
export const deleteApiById = (
  /**
   * 后台接口ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteApiById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteApiById.key = '/interfaces/{id}';

/**
 * 更新后台接口部分信息
 */
export const updateApiPatch = (
  /**
   * 后台接口id
   */
  id: string,
  body: RequestBodyApiEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateApiPatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateApiPatch.key = '/interfaces/{id}';

/**
 * 根据条件查询组织机构，支持分页、排序
 */
export const listOrganizations = (
  params: ListOrganizationsQueryParams,
  options?: RequestOptions
): Promise<Page_OrganizationEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listOrganizations.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listOrganizations.key = '/organizations';

/**
 * 创建组织机构
 */
export const createOrganization = (
  body: OrganizationEntity,
  options?: RequestOptions
): Promise<OrganizationEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createOrganization.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createOrganization.key = '/organizations';

/**
 * 根据条件查询组织机构信息，以树形结构返回
 */
export const organizationsTree = (options?: RequestOptions): Promise<OrganizationEntity[]> => {
  return defHttp.get(
    overrideConfigs({
      url: organizationsTree.key,
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
organizationsTree.key = '/organizations/tree';

/**
 * 根据ID查询组织机构
 */
export const loadOrganizationById = (
  /**
   * 组织机构ID
   */
  id: string,
  options?: RequestOptions
): Promise<OrganizationEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadOrganizationById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadOrganizationById.key = '/organizations/{id}';

/**
 * 更新组织机构全部信息
 */
export const updateOrganization = (
  /**
   * 组织机构id
   */
  id: string,
  body: RequestBodyOrganizationEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateOrganization.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateOrganization.key = '/organizations/{id}';

/**
 * 根据ID删除组织机构
 */
export const deleteOrganizationById = (
  /**
   * 组织机构ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteOrganizationById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteOrganizationById.key = '/organizations/{id}';

/**
 * 更新组织机构部分信息
 */
export const updateOrganizationPatch = (
  /**
   * 组织机构id
   */
  id: string,
  body: RequestBodyOrganizationEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateOrganizationPatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateOrganizationPatch.key = '/organizations/{id}';

/**
 * 停用组织机构
 */
export const disableOrganizationById = (
  /**
   * 组织机构id
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(disableOrganizationById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
disableOrganizationById.key = '/organizations/{id}/disable';

/**
 * 启用组织机构
 */
export const enableOrganizationById = (
  /**
   * 组织机构id
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(enableOrganizationById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
enableOrganizationById.key = '/organizations/{id}/enable';

/**
 * 根据条件查询权限，支持分页、排序
 */
export const listPermissions = (
  params: ListPermissionsQueryParams,
  options?: RequestOptions
): Promise<Page_PermissionEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listPermissions.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listPermissions.key = '/permissions';

/**
 * 创建权限
 */
export const createPermission = (
  body: PermissionEntity,
  options?: RequestOptions
): Promise<PermissionEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createPermission.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createPermission.key = '/permissions';

/**
 * 根据条件查询权限信息，以树型结构返回
 */
export const listPermissionsTree = (
  params: ListPermissionsTreeQueryParams,
  options?: RequestOptions
): Promise<PermissionEntity[]> => {
  return defHttp.get(
    overrideConfigs({
      url: listPermissionsTree.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listPermissionsTree.key = '/permissions/tree';

/**
 * 根据ID查询权限
 */
export const loadPermissionById = (
  /**
   * 权限ID
   */
  id: string,
  options?: RequestOptions
): Promise<PermissionEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadPermissionById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadPermissionById.key = '/permissions/{id}';

/**
 * 更新权限全部信息
 */
export const updatePermission = (
  /**
   * 权限id
   */
  id: string,
  body: RequestBodyPermissionEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updatePermission.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updatePermission.key = '/permissions/{id}';

/**
 * 根据ID删除权限
 */
export const deletePermissionById = (
  /**
   * 权限ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deletePermissionById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deletePermissionById.key = '/permissions/{id}';

/**
 * 更新权限部分信息
 */
export const updatePermissionPatch = (
  /**
   * 权限id
   */
  id: string,
  body: RequestBodyPermissionEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updatePermissionPatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updatePermissionPatch.key = '/permissions/{id}';

/**
 * 获取当前Principal
 */
export const principal = (options?: RequestOptions): Promise<Principal> => {
  return defHttp.get(
    overrideConfigs({
      url: principal.key,
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
principal.key = '/principal';

/**
 * 根据条件保留字段配置，支持分页、排序
 */
export const listReservableConfigs = (
  params: ListReservableConfigsQueryParams,
  options?: RequestOptions
): Promise<Page_AuditableEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listReservableConfigs.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listReservableConfigs.key = '/reservableConfigs';

/**
 * 创建预留字段配置
 */
export const createReservableConfig = (
  body: RequestBodyAuditableEntity,
  options?: RequestOptions
): Promise<AuditableEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createReservableConfig.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createReservableConfig.key = '/reservableConfigs';

/**
 * 根据类型查询预留字段配置
 */
export const loadReservableConfigByObjectType = (
  /**
   * 预留字段配置类型
   */
  objectType: string,
  options?: RequestOptions
): Promise<AuditableEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadReservableConfigByObjectType.key, { objectType }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadReservableConfigByObjectType.key = '/reservableConfigs/objectType/{objectType}';

/**
 * 根据ID查询预留字段配置
 */
export const loadReservableConfigById = (
  /**
   * 预留字段配置ID
   */
  id: string,
  options?: RequestOptions
): Promise<AuditableEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadReservableConfigById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadReservableConfigById.key = '/reservableConfigs/{id}';

/**
 * 更新预留字段配置全部信息
 */
export const updateReservableConfig = (
  /**
   * 预留字段配置ID
   */
  id: string,
  body: RequestBodyAuditableEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateReservableConfig.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateReservableConfig.key = '/reservableConfigs/{id}';

/**
 * 根据ID删除预留字段配置
 */
export const deleteReservableConfigById = (
  /**
   * 预留字段配置ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteReservableConfigById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteReservableConfigById.key = '/reservableConfigs/{id}';

/**
 * 更新预留字段配置部分信息
 */
export const updateReservableConfigPatch = (
  /**
   * 预留字段配置id
   */
  id: string,
  body: RequestBodyAuditableEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateReservableConfigPatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateReservableConfigPatch.key = '/reservableConfigs/{id}';

/**
 * 根据条件查询，支持分页、排序
 */
export const listResources = (
  params: ListResourcesQueryParams,
  options?: RequestOptions
): Promise<Page_ResourceEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listResources.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listResources.key = '/resources';

/**
 * 创建
 */
export const createResource = (
  body: RequestBodyResourceEntity,
  options?: RequestOptions
): Promise<ResourceEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createResource.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createResource.key = '/resources';

/**
 * 根据条件查询全部资源
 */
export const listAllResources = (
  params: ListAllResourcesQueryParams,
  options?: RequestOptions
): Promise<ResourceEntity[]> => {
  return defHttp.get(
    overrideConfigs({
      url: listAllResources.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listAllResources.key = '/resources/all';

/**
 * 根据ID查询
 */
export const loadResourceById = (
  /**
   * ID
   */
  id: string,
  options?: RequestOptions
): Promise<ResourceEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadResourceById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadResourceById.key = '/resources/{id}';

/**
 * 更新全部信息
 */
export const updateResource = (
  /**
   * ID
   */
  id: string,
  body: RequestBodyResourceEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateResource.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateResource.key = '/resources/{id}';

/**
 * 根据ID删除
 */
export const deleteResourceById = (
  /**
   * ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteResourceById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteResourceById.key = '/resources/{id}';

/**
 * 根据条件查询角色，支持分页、排序
 */
export const listRoles = (
  params: ListRolesQueryParams,
  options?: RequestOptions
): Promise<Page_RoleEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listRoles.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listRoles.key = '/roles';

/**
 * 创建角色
 */
export const createRole = (body: RoleEntity, options?: RequestOptions): Promise<RoleEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createRole.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createRole.key = '/roles';

/**
 * 根据条件查询全部角色
 */
export const listAllRoles = (
  params: ListAllRolesQueryParams,
  options?: RequestOptions
): Promise<RoleEntity[]> => {
  return defHttp.get(
    overrideConfigs({
      url: listAllRoles.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listAllRoles.key = '/roles/all';

/**
 * 根据ID查询角色
 */
export const loadRoleById = (
  /**
   * 角色ID
   */
  id: string,
  options?: RequestOptions
): Promise<RoleEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadRoleById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadRoleById.key = '/roles/{id}';

/**
 * 更新角色全部信息
 */
export const updateRole = (
  /**
   * 角色id
   */
  id: string,
  body: RequestBodyRoleEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateRole.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateRole.key = '/roles/{id}';

/**
 * 根据ID删除角色
 */
export const deleteRoleById = (
  /**
   * 角色ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteRoleById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteRoleById.key = '/roles/{id}';

/**
 * 更新角色部分信息
 */
export const updateRolePatch = (
  /**
   * 角色ID
   */
  id: string,
  body: RequestBodyRoleEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateRolePatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateRolePatch.key = '/roles/{id}';

/**
 * 停用角色
 */
export const disableRoleById = (
  /**
   * 角色id
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(disableRoleById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
disableRoleById.key = '/roles/{id}/disable';

/**
 * 启用角色
 */
export const enableRoleById = (
  /**
   * 角色id
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(enableRoleById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
enableRoleById.key = '/roles/{id}/enable';

/**
 * 设置角色权限
 */
export const setPermissions = (
  /**
   * 角色id
   */
  id: string,
  body: PermissionEntity[],
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(setPermissions.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
setPermissions.key = '/roles/{id}/permissions';

/**
 * 获取当前用户
 */
export const userInfo = (options?: RequestOptions): Promise<User> => {
  return defHttp.get(
    overrideConfigs({
      url: userInfo.key,
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
userInfo.key = '/user';

/**
 * 修改密码
 */
export const userChangePassword = (
  body: UserChangePasswordVO,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: userChangePassword.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
userChangePassword.key = '/user/change-password';

/**
 * 根据条件查询用户，支持分页、排序
 */
export const listUsers = (
  params: ListUsersQueryParams,
  options?: RequestOptions
): Promise<Page_UserEntity_> => {
  return defHttp.get(
    overrideConfigs({
      url: listUsers.key,
      params: params,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
listUsers.key = '/users';

/**
 * 创建用户
 */
export const createUser = (body: UserEntity, options?: RequestOptions): Promise<UserEntity> => {
  return defHttp.post(
    overrideConfigs({
      url: createUser.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
createUser.key = '/users';

/**
 * 根据id批量删除用户
 */
export const batchDeleteUserByIds = (
  body: RequestBodyBatchDeleteUserByIdsBody,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.post(
    overrideConfigs({
      url: batchDeleteUserByIds.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
batchDeleteUserByIds.key = '/users/batch-delete';

/**
 * 根据id批量停用用户
 */
export const batchDisableUserByIds = (
  body: RequestBodyBatchDeleteUserByIdsBody,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: batchDisableUserByIds.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
batchDisableUserByIds.key = '/users/batch-disable';

/**
 * 根据id批量启用用户
 */
export const batchEnableUserByIds = (
  body: RequestBodyBatchDeleteUserByIdsBody,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: batchEnableUserByIds.key,
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
batchEnableUserByIds.key = '/users/batch-enable';

/**
 * 根据ID查询用户
 */
export const loadUserById = (
  /**
   * 用户ID
   */
  id: string,
  options?: RequestOptions
): Promise<UserEntity> => {
  return defHttp.get(
    overrideConfigs({
      url: template(loadUserById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
loadUserById.key = '/users/{id}';

/**
 * 更新用户全部信息
 */
export const updateUser = (
  /**
   * 用户ID
   */
  id: string,
  body: RequestBodyUserEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(updateUser.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateUser.key = '/users/{id}';

/**
 * 根据ID删除用户
 */
export const deleteUserById = (
  /**
   * 用户ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.delete(
    overrideConfigs({
      url: template(deleteUserById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
deleteUserById.key = '/users/{id}';

/**
 * 更新用户部分信息
 */
export const updateUserPatch = (
  /**
   * 用户ID
   */
  id: string,
  body: RequestBodyUserEntity,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.patch(
    overrideConfigs({
      url: template(updateUserPatch.key, { id }),
      params: undefined,
      data: body,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
updateUserPatch.key = '/users/{id}';

/**
 * 根据ID停用用户
 */
export const disableUserById = (
  /**
   * 用户ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(disableUserById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
disableUserById.key = '/users/{id}/disable';

/**
 * 根据ID启用用户
 */
export const enableUserById = (
  /**
   * 用户ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(enableUserById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
enableUserById.key = '/users/{id}/enable';

/**
 * 根据id重置用户密码
 */
export const resetUserPasswordById = (
  /**
   * 用户ID
   */
  id: string,
  options?: RequestOptions
): Promise<RestResult> => {
  return defHttp.put(
    overrideConfigs({
      url: template(resetUserPasswordById.key, { id }),
      params: undefined,
      data: undefined,
    }),
    overrideOptions(options)
  );
};

/** Key is end point string without base url */
resetUserPasswordById.key = '/users/{id}/reset-password';
