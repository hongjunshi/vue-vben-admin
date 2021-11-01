/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

/**
* 
        * Api
      
*/

export interface Api {
  /**
   *
   * 接口代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 是否允许所有人访问
   * Format: int32
   */
  isPermitAll: '1' | '0';
  /**
   *
   * 接口名称
   */
  name: string;
  resource: Resource;
  /**
   *
   * 接口地址
   */
  url: string;
  additionalInformation?: { [x in string | number]: any };
  children?: Api[];
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  method?: string;
  parent?: Api;
  reservableValues?: ReservableValues_string_;
}

/**
* 
        * ApiEntity
      
        * 后台接口数据实体
*/

export interface ApiEntity {
  /**
   *
   * 代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 是否允许所有人访问
   * Format: int32
   */
  isPermitAll: '1' | '0';
  /**
   *
   * 名称
   */
  name: string;
  reservableValues: ReservableValuesEntity;
  resource: ResourceEntity;
  /**
   *
   * URL地址
   */
  url: string;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 下级
   */
  children?: ApiEntity[];
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 描述
   */
  description?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  /**
   *
   * 请求方式
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  parent?: ApiEntity;
  /**
   *
   * 排序索引
   * Format: int32
   */
  sortIndex?: number;
}

/**
* 
        * Application
      
*/

export interface Application {
  /**
   *
   * 应用代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 应用名称
   */
  name: string;
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  reservableValues?: ReservableValues_string_;
  roles?: Role[];
}

/**
* 
        * ApplicationEntity
      
        * 应用数据实体
*/

export interface ApplicationEntity {
  /**
   *
   * 编码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 名称
   */
  name: string;
  reservableValues: ReservableValuesEntity;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 描述
   */
  description?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  /**
   *
   * 角色列表
   */
  roles?: RoleEntity[];
}

/**
* 
        * AuditableEntity
      
        * 审计数据实体
*/

export interface AuditableEntity {
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 预留字段配置的类型
   */
  objectType: string;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  dateName1?: string;
  dateName2?: string;
  dateName3?: string;
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  doubleName1?: string;
  doubleName2?: string;
  doubleName3?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  longName1?: string;
  longName2?: string;
  longName3?: string;
  objectName?: string;
  stringName1?: string;
  stringName2?: string;
  stringName3?: string;
}

/**
* 
        * CreateApiResult
      
        * 创建后台接口信息返回结果
*/

export interface CreateApiResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: ApiEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreateDepartmentResult
      
        * 创建部门信息返回结果
*/

export interface CreateDepartmentResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DepartmentEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreateDictionaryResult
      
        * 创建字典信息返回结果
*/

export interface CreateDictionaryResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DictionaryEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreateDictionaryTypeResult
      
        * 创建字典类型信息返回结果
*/

export interface CreateDictionaryTypeResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DictionaryTypeEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreateDutyResult
      
        * 创建岗位信息返回结果
*/

export interface CreateDutyResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DutyEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreateOrganizationResult
      
        * 创建组织机构信息返回结果
*/

export interface CreateOrganizationResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: OrganizationEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreatePermissionResult
      
        * 创建权限信息返回结果
*/

export interface CreatePermissionResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: PermissionEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreateReservableConfigResult
      
        * 创建预留字段配置信息返回结果
*/

export interface CreateReservableConfigResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: AuditableEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreateRoleResult
      
        * 创建角色信息返回结果
*/

export interface CreateRoleResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: RoleEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * CreateUserResult
      
        * 创建用户信息返回结果
*/

export interface CreateUserResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: UserEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«ApiEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_ApiEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: ApiEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Api»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Api_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Api;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«AuditableEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_AuditableEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: AuditableEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«DepartmentEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_DepartmentEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DepartmentEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Department»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Department_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Department;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«DictionaryEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_DictionaryEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DictionaryEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«DictionaryTypeEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_DictionaryTypeEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DictionaryTypeEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«DictionaryType»
      
        * 带数据的返回结果
*/

export interface DataRestResult_DictionaryType_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DictionaryType;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Dictionary»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Dictionary_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Dictionary;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«DutyEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_DutyEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DutyEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Duty»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Duty_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Duty;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«List«Department»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_List_Department_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  /**
   *
   * 返回的泛型数据
   */
  data?: Department[];
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«List«Organization»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_List_Organization_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  /**
   *
   * 返回的泛型数据
   */
  data?: Organization[];
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«List«Permission»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_List_Permission_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  /**
   *
   * 返回的泛型数据
   */
  data?: Permission[];
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«OrganizationEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_OrganizationEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: OrganizationEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Organization»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Organization_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Organization;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«Api»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_Api_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_Api_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«Department»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_Department_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_Department_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«DictionaryType»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_DictionaryType_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_DictionaryType_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«Dictionary»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_Dictionary_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_Dictionary_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«Duty»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_Duty_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_Duty_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«Organization»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_Organization_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_Organization_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«Permission»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_Permission_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_Permission_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«ReservableConfig»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_ReservableConfig_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_ReservableConfig_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«Role»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_Role_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_Role_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Page«User»»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Page_User_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_User_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«PermissionEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_PermissionEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: PermissionEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Permission»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Permission_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Permission;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Principal»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Principal_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Principal;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«ReservableConfig»
      
        * 带数据的返回结果
*/

export interface DataRestResult_ReservableConfig_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: ReservableConfig;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«RoleEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_RoleEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: RoleEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«Role»
      
        * 带数据的返回结果
*/

export interface DataRestResult_Role_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Role;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«UserEntity»
      
        * 带数据的返回结果
*/

export interface DataRestResult_UserEntity_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: UserEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * DataRestResult«User»
      
        * 带数据的返回结果
*/

export interface DataRestResult_User_ {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: User;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * Department
      
*/

export interface Department {
  /**
   *
   * 部门代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 部门名称
   */
  name: string;
  organization: Organization;
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  description?: string;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  parent?: Department;
  reservableValues?: ReservableValues_string_;
}

/**
* 
        * DepartmentEntity
      
        * 部门信息实体
*/

export interface DepartmentEntity {
  /**
   *
   * 部门代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 部门名称
   */
  name: string;
  organization: OrganizationEntity;
  reservableValues: ReservableValuesEntity;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 下级部门
   */
  children?: DepartmentEntity[];
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 部门描述
   */
  description?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  parent?: DepartmentEntity;
  /**
   *
   * 排序索引
   * Format: int32
   */
  sortIndex?: number;
}

/**
* 
        * DepartmentTreeResult
      
        * 根据参数构造部门树形数据结果
*/

export interface DepartmentTreeResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  /**
   *
   * 返回的泛型数据
   */
  data?: Department[];
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface DepartmentsTreeQueryParams {
  /**
   *
   * 查询条件:部门名称，精确匹配
   */
  search_name?: string;
}

/**
* 
        * Dictionary
      
*/

export interface Dictionary {
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否系统预置
   * Format: int32
   */
  isSystem: '1' | '0';
  /**
   *
   * 字典类型代码
   */
  type: string;
  additionalInformation?: { [x in string | number]: any };
  code?: string;
  name?: string;
}

/**
* 
        * DictionaryEntity
      
        * 字典数据实体
*/

export interface DictionaryEntity {
  /**
   *
   * 字典代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 是否是系统预置
   * Format: int32
   */
  isSystem: '1' | '0';
  /**
   *
   * 字典名称
   */
  name: string;
  /**
   *
   * 类型
   */
  type: string;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 描述
   */
  description?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  /**
   *
   * 排序字段
   * Format: int32
   */
  sortIndex?: number;
}

/**
* 
        * DictionaryType
      
*/

export interface DictionaryType {
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否系统预置
   * Format: int32
   */
  isSystem: '1' | '0';
  additionalInformation?: { [x in string | number]: any };
  code?: string;
  items?: Dictionary[];
  name?: string;
}

/**
* 
        * DictionaryTypeEntity
      
        * 字典类型数据实体
*/

export interface DictionaryTypeEntity {
  /**
   *
   * 字典类型代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 是否是系统预置
   * Format: int32
   */
  isSystem: '1' | '0';
  /**
   *
   * 字典类型名称
   */
  name: string;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 描述
   */
  description?: string;
  /**
   *
   * 字典条目
   */
  items?: DictionaryEntity[];
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
}

/**
* 
        * Duty
      
*/

export interface Duty {
  /**
   *
   * 岗位代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  level: Dictionary;
  /**
   *
   * 岗位代码
   */
  name: string;
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  reservableValues?: ReservableValues_string_;
}

/**
* 
        * DutyEntity
      
        * 岗位数据实体
*/

export interface DutyEntity {
  /**
   *
   * 岗位编码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 是否是系统预置
   * Format: int32
   */
  isSystem: '1' | '0';
  level: DictionaryEntity;
  /**
   *
   * 岗位名称
   */
  name: string;
  reservableValues: ReservableValuesEntity;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 描述
   */
  description?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  /**
   *
   * 排序索引
   * Format: int32
   */
  sortIndex?: number;
}

/**
* 
        * ErrorRestResult
      
        * 错误结果
*/

export interface ErrorRestResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  /**
   *
   * 错误代码
   */
  error?: string;
  /**
   *
   * 返回消息
   */
  message?: string;
  /**
   *
   * 时间戳
   * Format: date-time
   */
  timestamp?: string;
}

/**
* 
        * GrantedAuthority
      
*/

export interface GrantedAuthority {
  authority?: string;
}

/**
* 
        * ListApiResult
      
        * 根据参数分页查询后台接口数据结果
*/

export interface ListApiResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_ApiEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface ListApisQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:后台接口代码，模糊匹配
   */
  search_code?: string;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:后台接口描述，模糊匹配
   */
  search_description?: string;
  /**
   *
   * 查询条件:是否可用，，1：是，0：否，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:后台接口请求方式，模糊匹配
   */
  search_method?: string;
  /**
   *
   * 查询条件:后台接口名称，模糊匹配
   */
  search_name?: string;
  /**
   *
   * 查询条件:上级后台接口代码，模糊匹配
   */
  search_parentCode?: string;
  /**
   *
   * 查询条件:上级后台接口ID，精确匹配
   */
  search_parentId?: string;
  /**
   *
   * 查询条件:上级后台接口名称，模糊匹配
   */
  search_parentName?: string;
  /**
   *
   * 查询条件:后台接口地址，模糊匹配
   */
  search_url?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

/**
* 
        * ListDepartmentResult
      
        * 根据参数分页查询部门数据结果
*/

export interface ListDepartmentResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_DepartmentEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface ListDepartmentsQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:部门代码，模糊匹配
   */
  search_code?: string;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:部门描述，模糊匹配
   */
  search_description?: string;
  /**
   *
   * 查询条件:是否可用，，1：是，0：否，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:部门名称，模糊匹配
   */
  search_name?: string;
  /**
   *
   * 查询条件:所属组织机构ID，精确匹配
   */
  search_organizationId?: string;
  /**
   *
   * 查询条件:所属组织机构名称，模糊匹配
   */
  search_organizationName?: string;
  /**
   *
   * 查询条件:上级部门ID，精确匹配
   */
  search_parentId?: string;
  /**
   *
   * 查询条件:上级部门名称，模糊匹配
   */
  search_parentName?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

export interface ListDictionariesQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:字典代码，模糊匹配
   */
  search_code?: string;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:字典描述，模糊匹配
   */
  search_description?: string;
  /**
   *
   * 查询条件:是否可用，，1：是，0：否，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:是否是系统预置，，1：是，0：否，精确匹配
   */
  search_isSystem?: '0' | '1';
  /**
   *
   * 查询条件:字典名称，模糊匹配
   */
  search_name?: string;
  /**
   *
   * 查询条件:字典类型，精确匹配
   */
  search_type?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

/**
* 
        * ListDictionaryResult
      
        * 根据参数分页查询字典数据结果
*/

export interface ListDictionaryResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_DictionaryEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * ListDictionaryTypeResult
      
        * 根据参数分页查询字典类型数据结果
*/

export interface ListDictionaryTypeResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_DictionaryTypeEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface ListDictionaryTypesQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:字典代码，模糊匹配
   */
  search_code?: string;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:字典描述，模糊匹配
   */
  search_description?: string;
  /**
   *
   * 查询条件:是否是系统预置，，1：是，0：否，精确匹配
   */
  search_isSystem?: '0' | '1';
  /**
   *
   * 查询条件:字典名称，模糊匹配
   */
  search_name?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

export interface ListDutiesQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:岗位代码，模糊匹配
   */
  search_code?: string;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:岗位描述，模糊匹配
   */
  search_description?: string;
  /**
   *
   * 查询条件:是否可用，，1：是，0：否，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:是否系统预置，，1：是，0：否，精确匹配
   */
  search_isSystem?: '0' | '1';
  /**
   *
   * 查询条件:岗位级别，关联岗位级别字典，精确匹配
   */
  search_level?: string;
  /**
   *
   * 查询条件:岗位级别名称，模糊匹配
   */
  search_levelName?: string;
  /**
   *
   * 查询条件:岗位名称，模糊匹配
   */
  search_name?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

/**
* 
        * ListDutyResult
      
        * 根据参数分页查询岗位数据结果
*/

export interface ListDutyResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_DutyEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * ListOrganizationResult
      
        * 根据参数分页查询组织机构数据结果
*/

export interface ListOrganizationResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_OrganizationEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface ListOrganizationsQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:组织机构代码，模糊匹配
   */
  search_code?: string;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:组织机构描述，模糊匹配
   */
  search_description?: string;
  /**
   *
   * 查询条件:是否可用，，1：是，0：否，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:组织机构名称，模糊匹配
   */
  search_name?: string;
  /**
   *
   * 查询条件:级组织机构ID，精确匹配
   */
  search_parentId?: string;
  /**
   *
   * 查询条件:上级组织机构名称，模糊匹配
   */
  search_parentName?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

/**
* 
        * ListPermissionResult
      
        * 根据参数分页查询权限数据结果
*/

export interface ListPermissionResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_PermissionEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface ListPermissionsQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:权限代码，模糊匹配
   */
  search_code?: string;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:权限描述，模糊匹配
   */
  search_description?: string;
  /**
   *
   * 查询条件:权限图标，模糊匹配
   */
  search_icon?: string;
  /**
   *
   * 查询条件:是否可用，，1：是，0：否，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:权限名称，模糊匹配
   */
  search_name?: string;
  /**
   *
   * 查询条件:上级权限代码，模糊匹配
   */
  search_parentCode?: string;
  /**
   *
   * 查询条件:上级权限ID，精确匹配
   */
  search_parentId?: string;
  /**
   *
   * 查询条件:上级权限名称，模糊匹配
   */
  search_parentName?: string;
  /**
   *
   * 查询条件:权限类型，精确匹配
   */
  search_type?: string;
  /**
   *
   * 查询条件:权限地址，模糊匹配
   */
  search_url?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

export interface ListPermissionsTreeQueryParams {
  /**
   *
   * 查询条件:权限类型，精确匹配
   */
  search_type?: string;
}

/**
* 
        * ListReservableConfigResult
      
        * 根据参数分页查询预留字段配置数据结果
*/

export interface ListReservableConfigResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_AuditableEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface ListReservableConfigsQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:日期字段1名称，模糊匹配
   */
  search_dateName1?: string;
  /**
   *
   * 查询条件:日期字段2名称，模糊匹配
   */
  search_dateName2?: string;
  /**
   *
   * 查询条件:日期字段3名称，模糊匹配
   */
  search_dateName3?: string;
  /**
   *
   * 查询条件:小数字段1名称，模糊匹配
   */
  search_doubleName1?: string;
  /**
   *
   * 查询条件:小数字段2名称，模糊匹配
   */
  search_doubleName2?: string;
  /**
   *
   * 查询条件:小数字段3名称，模糊匹配
   */
  search_doubleName3?: string;
  /**
   *
   * 查询条件:是否可用，，1：是，0：否，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:整型字段1名称，模糊匹配
   */
  search_longName1?: string;
  /**
   *
   * 查询条件:整型字段2名称，模糊匹配
   */
  search_longName2?: string;
  /**
   *
   * 查询条件:整型字段3名称，模糊匹配
   */
  search_longName3?: string;
  /**
   *
   * 查询条件:配置对象名称，模糊匹配
   */
  search_objectName?: string;
  /**
   *
   * 查询条件:配置对象类型，模糊匹配
   */
  search_objectType?: string;
  /**
   *
   * 查询条件:字符字段1名称，模糊匹配
   */
  search_stringName1?: string;
  /**
   *
   * 查询条件:字符字段2名称，模糊匹配
   */
  search_stringName2?: string;
  /**
   *
   * 查询条件:字符字段3名称，模糊匹配
   */
  search_stringName3?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

/**
* 
        * ListRoleResult
      
        * 根据参数分页查询角色数据结果
*/

export interface ListRoleResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_RoleEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface ListRolesQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:角色代码，模糊匹配
   */
  search_code?: string;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:角色描述，模糊匹配
   */
  search_description?: string;
  /**
   *
   * 查询条件:是否可用，，1：是，0：否，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:是否系统角色，1：是，0：否，精确匹配
   */
  search_isSystem?: '0' | '1';
  /**
   *
   * 查询条件:角色级别，对应角色字典，精确匹配
   */
  search_level?: string;
  /**
   *
   * 查询条件:角色级别名称，模糊匹配
   */
  search_levelName?: string;
  /**
   *
   * 查询条件:角色名称，模糊匹配
   */
  search_name?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

export interface ListUsersQueryParams {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  pageNumber?: number;
  /**
   *
   * 分页大小
   * Format: int32
   */
  pageSize?: number;
  /**
   *
   * 查询条件:创建日期起，格式yyyy-mm-dd
   */
  search_createDateBegin?: string;
  /**
   *
   * 查询条件:创建日期止，格式yyyy-mm-dd
   */
  search_createDateEnd?: string;
  /**
   *
   * 查询条件:所属部门ID，精确匹配
   */
  search_departmentId?: string;
  /**
   *
   * 查询条件:所属部门名称，模糊匹配
   */
  search_departmentName?: string;
  /**
   *
   * 查询条件:邮箱，模糊匹配
   */
  search_email?: string;
  /**
   *
   * 查询条件:性别代码，对应性别字典，精确匹配
   */
  search_gender?: string;
  /**
   *
   * 查询条件:是否启用，0：否，1：是，精确匹配
   */
  search_isEnable?: '0' | '1';
  /**
   *
   * 查询条件:手机号码，模糊匹配
   */
  search_mobile?: string;
  /**
   *
   * 查询条件:姓名，模糊查询
   */
  search_name?: string;
  /**
   *
   * 查询条件:所属组织机构ID，精确匹配
   */
  search_organizationId?: string;
  /**
   *
   * 查询条件:所属组织机构名称，模糊匹配
   */
  search_organizationName?: string;
  /**
   *
   * 查询条件:岗位代码，对应岗位字典，精确匹配
   */
  search_title?: string;
  /**
   *
   * 查询条件:用户名称，模糊查询
   */
  search_username?: string;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   */
  sort?: string[];
}

/**
* 
        * ListUsersResult
      
        * 根据参数分页查询用户数据结果
*/

export interface ListUsersResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Page_UserEntity_;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadApiByIdResult
      
        * 根据ID查询后台接口数据结果
*/

export interface LoadApiByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: ApiEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadDepartmentByIdResult
      
        * 根据ID查询部门数据结果
*/

export interface LoadDepartmentByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DepartmentEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadDictionaryByIdResult
      
        * 根据ID查询字典数据结果
*/

export interface LoadDictionaryByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DictionaryEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadDictionaryTypeByIdResult
      
        * 根据ID查询字典类型数据结果
*/

export interface LoadDictionaryTypeByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DictionaryTypeEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadDutyByIdResult
      
        * 根据ID查询岗位数据结果
*/

export interface LoadDutyByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: DutyEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadOrganizationByIdResult
      
        * 根据ID查询组织机构数据结果
*/

export interface LoadOrganizationByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: OrganizationEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadPermissionByIdResult
      
        * 根据ID查询权限数据结果
*/

export interface LoadPermissionByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: PermissionEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadReservableConfigByIdResult
      
        * 根据ID查询预留字段配置数据结果
*/

export interface LoadReservableConfigByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: AuditableEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadReservableConfigByObjectTypeResult
      
        * 根据类型查询预留字段配置数据结果
*/

export interface LoadReservableConfigByObjectTypeResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: AuditableEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadRoleByIdResult
      
        * 根据ID查询角色数据结果
*/

export interface LoadRoleByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: RoleEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * LoadUserByIdResult
      
        * 根据ID查询用户数据结果
*/

export interface LoadUserByIdResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: UserEntity;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * Organization
      
*/

export interface Organization {
  /**
   *
   * 组织机构代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 组织机构名称
   */
  name: string;
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  parent?: Organization;
  reservableValues?: ReservableValues_string_;
}

/**
* 
        * OrganizationEntity
      
        * 组织机构数据实体
*/

export interface OrganizationEntity {
  /**
   *
   * 组织机构代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 组织机构名称
   */
  name: string;
  reservableValues: ReservableValuesEntity;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 下级组织机构
   */
  children?: OrganizationEntity[];
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 部门数组
   */
  departments?: DepartmentEntity[];
  /**
   *
   * 组织机构描述
   */
  description?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  parent?: OrganizationEntity;
  /**
   *
   * 排序索引
   * Format: int32
   */
  sortIndex?: number;
}

/**
* 
        * OrganizationTreeResult
      
        * 根据参数构造组织机构树形数据结果
*/

export interface OrganizationTreeResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  /**
   *
   * 返回的泛型数据
   */
  data?: OrganizationEntity[];
  /**
   *
   * 返回消息
   */
  message?: string;
}

export interface OrganizationsTreeQueryParams {
  /**
   *
   * 查询条件:组织机构或部门名称，精确匹配
   */
  search_name?: string;
}

/**
* 
        * Page«ApiEntity»
      
*/

export interface Page_ApiEntity_ {
  content?: ApiEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«Api»
      
*/

export interface Page_Api_ {
  content?: Api[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«AuditableEntity»
      
*/

export interface Page_AuditableEntity_ {
  content?: AuditableEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«DepartmentEntity»
      
*/

export interface Page_DepartmentEntity_ {
  content?: DepartmentEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«Department»
      
*/

export interface Page_Department_ {
  content?: Department[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«DictionaryEntity»
      
*/

export interface Page_DictionaryEntity_ {
  content?: DictionaryEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«DictionaryTypeEntity»
      
*/

export interface Page_DictionaryTypeEntity_ {
  content?: DictionaryTypeEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«DictionaryType»
      
*/

export interface Page_DictionaryType_ {
  content?: DictionaryType[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«Dictionary»
      
*/

export interface Page_Dictionary_ {
  content?: Dictionary[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«DutyEntity»
      
*/

export interface Page_DutyEntity_ {
  content?: DutyEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«Duty»
      
*/

export interface Page_Duty_ {
  content?: Duty[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«OrganizationEntity»
      
*/

export interface Page_OrganizationEntity_ {
  content?: OrganizationEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«Organization»
      
*/

export interface Page_Organization_ {
  content?: Organization[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«PermissionEntity»
      
*/

export interface Page_PermissionEntity_ {
  content?: PermissionEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«Permission»
      
*/

export interface Page_Permission_ {
  content?: Permission[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«ReservableConfig»
      
*/

export interface Page_ReservableConfig_ {
  content?: ReservableConfig[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«RoleEntity»
      
*/

export interface Page_RoleEntity_ {
  content?: RoleEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«Role»
      
*/

export interface Page_Role_ {
  content?: Role[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«UserEntity»
      
*/

export interface Page_UserEntity_ {
  content?: UserEntity[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Page«User»
      
*/

export interface Page_User_ {
  content?: User[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  /**
   *
   * Format: int32
   */
  number?: number;
  /**
   *
   * Format: int32
   */
  numberOfElements?: number;
  pageable?: SwaggerPage;
  /**
   *
   * Format: int32
   */
  size?: number;
  sort?: Sort;
  /**
   *
   * Format: int64
   */
  totalElements?: number;
  /**
   *
   * Format: int32
   */
  totalPages?: number;
}

/**
* 
        * Permission
      
*/

export interface Permission {
  application: Application;
  /**
   *
   * 权限代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 权限名称
   */
  name: string;
  /**
   *
   * 权限类型
   * Format: int32
   */
  type: '0' | '1' | '2';
  additionalInformation?: { [x in string | number]: any };
  apis?: Api[];
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  icon?: string;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  parent?: Permission;
  reservableValues?: ReservableValues_string_;
  url?: string;
}

/**
* 
        * PermissionEntity
      
        * 权限数据实体
*/

export interface PermissionEntity {
  application: ApplicationEntity;
  /**
   *
   * 权限代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 权限名称
   */
  name: string;
  reservableValues: ReservableValuesEntity;
  /**
   *
   * 权限类型
   * Format: int32
   */
  type: '0' | '1' | '2';
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 依赖接口
   */
  apis?: ApiEntity[];
  /**
   *
   * 下级
   */
  children?: PermissionEntity[];
  /**
   *
   * 组件地址，根据后台配置权限菜单时填写
   */
  component?: string;
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 描述
   */
  description?: string;
  /**
   *
   * 图标
   */
  icon?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  parent?: PermissionEntity;
  /**
   *
   * 重定向地址，类型为目录的时候填写
   */
  redirect?: string;
  /**
   *
   * 排序索引
   * Format: int32
   */
  sortIndex?: number;
  /**
   *
   * 标题名称
   */
  title?: string;
  /**
   *
   * URL地址
   */
  url?: string;
}

/**
* 
        * PermissionTreeResult
      
        * 根据参数构造权限树形数据
*/

export interface PermissionTreeResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  /**
   *
   * 返回的泛型数据
   */
  data?: PermissionEntity[];
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * Principal
      
*/

export interface Principal {
  name?: string;
}

/**
* 
        * PrincipalInfoResult
      
        * Principal信息结果
*/

export interface PrincipalInfoResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: Principal;
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
 *
 * 后台接口实体参数
 */

export type RequestBodyApiEntity = ApiEntity;

/**
 *
 * 预留字段配置实体参数
 */

export type RequestBodyAuditableEntity = AuditableEntity;

/**
 *
 * 部门实体参数
 */

export type RequestBodyDepartmentEntity = DepartmentEntity;

/**
 *
 * 字典实体参数
 */

export type RequestBodyDictionaryEntity = DictionaryEntity;

/**
 *
 * 岗位实体参数
 */

export type RequestBodyDutyEntity = DutyEntity;

/**
 *
 * 组织机构实体参数
 */

export type RequestBodyOrganizationEntity = OrganizationEntity;

/**
 *
 * 权限实体参数
 */

export type RequestBodyPermissionEntity = PermissionEntity;

/**
 *
 * 角色实体参数
 */

export type RequestBodyRoleEntity = RoleEntity;

/**
 *
 * 用户实体参数
 */

export type RequestBodyUserEntity = UserEntity;

/**
* 
        * ReservableConfig
      
*/

export interface ReservableConfig {
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: { [x in string | number]: any };
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 预留字段配置的类型
   */
  objectType: string;
  dateName1?: string;
  dateName2?: string;
  dateName3?: string;
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  doubleName1?: string;
  doubleName2?: string;
  doubleName3?: string;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  longName1?: string;
  longName2?: string;
  longName3?: string;
  stringName1?: string;
  stringName2?: string;
  stringName3?: string;
}

/**
* 
        * ReservableValuesEntity
      
        * 扩展信息值实体
*/

export interface ReservableValuesEntity {
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * Format: date-time
   */
  date1?: string;
  /**
   *
   * Format: date-time
   */
  date2?: string;
  /**
   *
   * Format: date-time
   */
  date3?: string;
  /**
   *
   * Format: double
   */
  double1?: number;
  /**
   *
   * Format: double
   */
  double2?: number;
  /**
   *
   * Format: double
   */
  double3?: number;
  /**
   *
   * Format: int64
   */
  long1?: number;
  /**
   *
   * Format: int64
   */
  long2?: number;
  /**
   *
   * Format: int64
   */
  long3?: number;
  objectType?: string;
  string1?: string;
  string2?: string;
  string3?: string;
}

/**
* 
        * ReservableValues«string»
      
*/

export interface ReservableValues_string_ {
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * Format: date-time
   */
  date1?: string;
  /**
   *
   * Format: date-time
   */
  date2?: string;
  /**
   *
   * Format: date-time
   */
  date3?: string;
  /**
   *
   * Format: double
   */
  double1?: number;
  /**
   *
   * Format: double
   */
  double2?: number;
  /**
   *
   * Format: double
   */
  double3?: number;
  /**
   *
   * Format: int64
   */
  long1?: number;
  /**
   *
   * Format: int64
   */
  long2?: number;
  /**
   *
   * Format: int64
   */
  long3?: number;
  objectType?: string;
  string1?: string;
  string2?: string;
  string3?: string;
}

/**
* 
        * Resource
      
*/

export interface Resource {
  /**
   *
   * 资源代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 资源名称
   */
  name: string;
  /**
   *
   * 资源url地址
   */
  url: string;
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  reservableValues?: ReservableValues_string_;
  serviceId?: string;
}

/**
* 
        * ResourceEntity
      
        * 资源数据实体
*/

export interface ResourceEntity {
  /**
   *
   * 资源编码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 资源名称
   */
  name: string;
  reservableValues: ReservableValuesEntity;
  /**
   *
   * 服务URL
   */
  url: string;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 资源描述
   */
  description?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  /**
   *
   * 服务ID
   */
  serviceId?: string;
}

/**
* 
        * RestResult
      
        * Rest返回结果
*/

export interface RestResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  /**
   *
   * 返回消息
   */
  message?: string;
}

/**
* 
        * Role
      
*/

export interface Role {
  application: Application;
  /**
   *
   * 角色代码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 是否系统预置
   * Format: int32
   */
  isSystem: '1' | '0';
  level: Dictionary;
  /**
   *
   * 角色名称
   */
  name: string;
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  permissions?: Permission[];
  reservableValues?: ReservableValues_string_;
}

/**
* 
        * RoleEntity
      
        * 角色数据实体
*/

export interface RoleEntity {
  application: ApplicationEntity;
  /**
   *
   * 编码
   */
  code: string;
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 是否是系统预置
   * Format: int32
   */
  isSystem: '1' | '0';
  level: DictionaryEntity;
  /**
   *
   * 名称
   */
  name: string;
  reservableValues: ReservableValuesEntity;
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  /**
   *
   * 描述
   */
  description?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  /**
   *
   * 权限列表
   */
  permissions?: PermissionEntity[];
}

/**
* 
        * Sort
      
*/

export interface Sort {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
}

/**
* 
        * SwaggerPage
      
*/

export interface SwaggerPage {
  /**
   *
   * 分页号码,从0开始
   * Format: int32
   */
  page?: number;
  /**
   *
   * 分页大小
   * Format: int32
   * @example
   *   50
   */
  size?: number;
  /**
   *
   * 排序规则，格式: 字段名[,asc|desc]，默认升序，支持多字段排序
   * @example
   *   id,desc
   */
  sort?: string[];
}

/**
* 
        * User
      
*/

export interface User {
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: User;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 用户名称
   */
  name: string;
  organization: Organization;
  /**
   *
   * 用户权限列表
   */
  permissions: Permission[];
  /**
   *
   * 用户账号
   */
  username: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  additionalDepartments?: Department[];
  additionalInformation?: { [x in string | number]: any };
  additionalOrganizations?: Organization[];
  authorities?: GrantedAuthority[];
  avatar?: string;
  credentialsNonExpired?: boolean;
  /**
   *
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: User;
  department?: Department;
  duties?: Duty[];
  enabled?: boolean;
  /**
   *
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: User;
  reservableValues?: ReservableValues_string_;
  roles?: Role[];
}

/**
* 
        * UserEntity
      
        * 用户信息实体
*/

export interface UserEntity {
  /**
   *
   * 创建时间
   * Format: date-time
   */
  createTime: string;
  createUser: UserEntity;
  gender: DictionaryEntity;
  /**
   *
   * ID
   */
  id: string;
  /**
   *
   * 是否删除
   * Format: int32
   */
  isDelete: '0' | '1';
  /**
   *
   * 是否可用
   * Format: int32
   */
  isEnable: '1' | '0';
  /**
   *
   * 姓名
   */
  name: string;
  organization: OrganizationEntity;
  reservableValues: ReservableValuesEntity;
  /**
   *
   * 登录账号
   */
  username: string;
  additionalDepartments?: DepartmentEntity[];
  /**
   *
   * 附加信息，map类型
   */
  additionalInformation?: { [x in string | number]: any };
  additionalOrganizations?: OrganizationEntity[];
  /**
   *
   * 用户头像
   */
  avatar?: string;
  /**
   *
   * 删除时间
   * Format: date-time
   */
  deleteTime?: string;
  deleteUser?: UserEntity;
  department?: DepartmentEntity;
  /**
   *
   * 岗位列表
   */
  duties?: DutyEntity[];
  /**
   *
   * 电子邮箱
   */
  email?: string;
  /**
   *
   * 最后修改时间
   * Format: date-time
   */
  lastModifyTime?: string;
  lastModifyUser?: UserEntity;
  /**
   *
   * 手机
   */
  mobile?: string;
  /**
   *
   * 权限列表
   */
  permissions?: PermissionEntity[];
  /**
   *
   * 密码明文
   */
  plainPassword?: string;
  /**
   *
   * 角色列表
   */
  roles?: RoleEntity[];
  /**
   *
   * 排序索引
   * Format: int32
   */
  sortIndex?: number;
  title?: DictionaryEntity;
}

/**
* 
        * UserInfoResult
      
        * 用户信息结果
*/

export interface UserInfoResult {
  /**
   *
   * 返回状态码
   * Format: int32
   */
  code?: '200' | '201' | '204' | '400' | '401' | '403' | '404' | '408' | '500' | '503' | '504';
  data?: User;
  /**
   *
   * 返回消息
   */
  message?: string;
}
