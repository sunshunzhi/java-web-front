//统一管理用户相关的接口
import request from '@/utils/request'

import type {
  loginFormData,
  loginResponseData,
  refreshTokenResponseData,
} from './type'

//项目用户相关的请求地址

enum API {
  LOGIN_URL = '/user/login',

  REFRESH_TOKEN_URL = '/user/refreshToken',

  LOGOUT_URL = '/user/logout',
}
//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

//刷新token令牌
export const refreshToken = () =>
  request.get<any, refreshTokenResponseData>(API.REFRESH_TOKEN_URL)

//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
