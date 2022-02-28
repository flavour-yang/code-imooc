import axios from '@/service/axiosMiddleware';

/*
 * @Author: Y
 * @Date: 2022-01-12 09:09:30
 * @Description: 登录
 */
export interface LoginParamsType {
  username: string;
  password: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return axios('/api/bl-users/login?expandPermissions=true&fullPermissions=true', {
    method: 'POST',
    data: params,
  });
}

export async function getUserAuthInfo(userId: string) {
  return axios(`/api/jtlsp/system/userrole/getUserDetails?userId=${userId}`);
}