import { RequestOptions } from '/#/axios';
import type { AxiosRequestConfig } from 'axios';

export const overrideOptions = function (options?: RequestOptions): RequestOptions {
  return {
    urlPrefix: '/api',
    apiUrl: '/sample',
    ...options,
  };
};
export const overrideConfig = function (config?: AxiosRequestConfig): AxiosRequestConfig {
  return {
    ...config,
  };
};
