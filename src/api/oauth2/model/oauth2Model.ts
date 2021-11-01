/**
 * @description: Login interface parameters
 */
export interface TokenParams {
  username: string;
  password: string;
}
/**
 * @description: Login interface return value
 */
export interface TokenResultModel {
  access_token: string;
}
