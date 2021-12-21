/**
 * You can modify this file
 *
 * @version 5
 */
import { RequestOptions } from '/#/axios';
import type { AxiosRequestConfig } from 'axios';
import qs from 'qs';
const defaultOptions: RequestOptions = {
  urlPrefix: '/api',
  apiUrl: '/sample',
  errorMessageMode: 'message',
};
const defaultConfigs: AxiosRequestConfig = {
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  },
};
export const overrideOptions = function (options?: RequestOptions): RequestOptions {
  return {
    ...defaultOptions,
    ...options,
  };
};
export const overrideConfigs = function (config?: AxiosRequestConfig): AxiosRequestConfig {
  return {
    ...defaultConfigs,
    ...config,
  };
};
