import { defHttp } from '/@/utils/http/axios';
import { TokenParams, TokenResultModel } from './model/oauth2Model';

import { ErrorMessageMode } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { getToken } from '/@/utils/auth';
import qs from 'qs';

const globSetting = useGlobSetting();

enum Api {
  Login = '/oauth2/token',
  Logout = '/oauth2/revoke',
}

/**
 * @description: user login api
 */
export function login(params: TokenParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<TokenResultModel>(
    {
      url: Api.Login,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({
        ...params,
        grant_type: 'password',
        client_id: globSetting.clientId,
        client_secret: globSetting.clientSecret,
      }),
    },
    {
      apiUrl: '',
      errorMessageMode: mode,
      isTransformResponse: false,
      withToken: false,
    }
  );
}

export function logout() {
  return defHttp.post<TokenResultModel>(
    {
      url: Api.Logout,
      auth: {
        username: globSetting.clientId,
        password: globSetting.clientSecret,
      },
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({
        token: getToken(),
      }),
    },
    {
      apiUrl: '',
      // errorMessageMode: mode,
      isTransformResponse: false,
      withToken: false,
    }
  );
}
