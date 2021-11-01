/**
 * You can modify this file
 *
 * @version 5
 */
import { RequestOptions } from '/#/axios';
import type { AxiosRequestConfig } from 'axios';

const defaultOptions = {};
const defaultConfigs = {};
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
