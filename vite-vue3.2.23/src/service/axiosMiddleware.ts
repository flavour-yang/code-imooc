/*
 * @Author: Y
 * @Date: 2022-01-12 09:48:00
 * @Description: 
 */
import { message } from 'ant-design-vue';
import axios from 'axios'
import router from '@/router'
import { parseQuery } from 'vue-router';
export const getPageQuery = () => parseQuery(window.location.href.split('?')[1]);
/**
 * 异常处理程序
 */

const request = axios.create({
  // baseURL: 'http://dev.jiatu.info:9216/',
  timeout: 30000,
});


// response 拦截器, 处理 response
const folioErrorTranslate = [
  { msg: 'Password does not match', chinese: '登录名或密码错误' }, // 密码不匹配
  { msg: 'User must be flagged as active', chinese: '用户未激活' },
  { msg: 'Error verifying user existence: No user found by username', chinese: '此用户不存在' },
  { msg: 'You must provide a username or userId', chinese: '用户名不能为空' },
  { msg: 'No credentials match that login', chinese: '没有凭据与该登录名匹配' },
  { msg: 'Error verifying user existence', chinese: '登录名或密码错误' }, // Error verifying user existence, 验证用户存在错误
  { msg: 'User could not be verified as active', chinese: '用户无法被核实为活跃用户' },
  { msg: 'Error retrieving stored hash and salt from credentials', chinese: '凭证验证错误' },
];

// request拦截器, 改变url 或 options.
request.interceptors.request.use((options) => {
  const { url, headers } = options
  const token = localStorage.getItem('x-okapi-token');
  // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWNoYV8xMSIsInVzZXJfaWQiOiJjNzFlNzc1Yi1hOTE4LTQ1YTktYTIyYS0yZTIxYmMxMzk2ZmYiLCJpYXQiOjE2MzUyMzc1MzgsInRlbmFudCI6ImRpa3UifQ.imvLgZjR5CnJn5XDc9QhojHm3W6M-mhITTBpY7RQ2_8';
  const headers1 = {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'X-Okapi-Tenant': 'diku',
  };
  if (!headers?.noToken) {
    headers1['X-Okapi-Token'] = token;
  }
  if (url.indexOf('bl-users/login') !== -1) {
    delete headers1['X-Okapi-Token'];
  }
  if (url.indexOf('uploadFile') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('upload') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('importExcelCnt?depositNo=') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('addcheckInBatch') !== -1) {
    delete headers1['Content-Type'];
  }

  if (url.indexOf('parseElecDepositExcel?depositNo=') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('importIsbnData') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('parseIsbnExcel') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('importDataByExcel') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('parseAudioIsbnExcel') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('importAudioIsbnData') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('importExcelList?depositNo=') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('importElecDeposit?depositNo=') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('importDataByExcel') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('exportCheckinListPdf') !== -1 || url.indexOf('exportPdfSerialChecked') !== -1) {
    delete headers1['Content-Type'];
  }
  if (url.indexOf('exportExcel') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('exportCollection') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('export') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('download') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('downLoadFile') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('downloadTemplate') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('downloadModuleFile?versionTypeId') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('downloadSerialItemBySearch') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('capub/multi/statisticsList') !== -1) {
    headers1.Accept = 'application/vnd.ms-excel';
  }
  if (url.indexOf('downLoadGeneralSurveyFile') !== -1) {
    headers1.Accept = 'application/x-download';
  }
  if (url.indexOf('exportSysLogRecord') !== -1) {
    headers1.Accept = 'application/x-download';
  }
  if (url.indexOf('exportCirculateRecord') !== -1) {
    headers1.Accept = 'application/x-download';
  }
  if (url.indexOf('exportApplicationItem') !== -1) {
    headers1.Accept = 'application/x-download';
  }
  if (url.indexOf('searchCollectionAccount') !== -1) {
    options.timeout = 60000;
  }
  if (url.indexOf('searchVersionInfo') !== -1) {
    options.timeout = 60000;
  }

  if (url.indexOf('downExcelFile?exportId=') !== -1) {
    headers1.Accept = 'application/x-zip-compressed';
  }
  if (url.indexOf('exportCheckinListPdf') !== -1 || url.indexOf('exportPdfSerialChecked') !== -1) {
    headers1.Accept = 'application/pdf';
  }
  // const basicUrl = 'https://folio-jiatu.jieshu.me'
  return {
    ...options,
    url,
    headers: headers1,
  };
});
request.interceptors.response.use(async (response: any) => {
  // 200/201/400/422/500状态码在拦截器处理。其他状态码在errorHandler处理
  if (
    response &&
    response.status &&
    response.status !== 200 &&
    response.status !== 201 &&
    response.status !== 400 &&
    response.status !== 422 && // folio接口返回错误在此处理
    response.status !== 500
  ) {
    return response;
  }
  let data: any;
  const { url } = response.config
  if (url.indexOf('exportExcel') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('exportExcel') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('export') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('downLoadFile') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('download') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('downloadTemplate') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('downloadSerialItemBySearch') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('downLoadGeneralSurveyFile') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('downExcelFile?exportId=') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('exportSysLogRecord') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('exportCirculateRecord') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('exportApplicationItem') !== -1) {
    response.config.responseType = 'blob';
  } else if (url.indexOf('capub/multi/statisticsList') !== -1) {
    response.config.responseType = 'blob';
  } else {
    data = response.data
  }
  const token = response.headers['x-okapi-token']
  if (token) {
    localStorage.setItem('x-okapi-token', token);
  }
  // 非 folio 接口
  const hasCode = Object.keys(data).findIndex((k) => k === 'code');
  if (data.code) {
    if (data.code === 'COMMON_200') {
      return data.data;
    }
    const noMessageUrls = 'jtlsp/system/userrole/check_password';
    // const currentUrl = response.headers.get('x-real-url');
    const currentUrl = url;
    if (currentUrl.indexOf(noMessageUrls) === -1) {
      message.error(data.msg);
    }
    return data;
  }
  if (hasCode !== -1) {
    // code 存在，但是可能为 null，请求失败
    message.error('请求失败');
    return { data: null, code: '', msg: '请求失败' };
  }
  // folio 接口
  if (data.statusCode === 400) {
    let msg = '';
    folioErrorTranslate.forEach((trans) => {
      if (data.errorMessage.indexOf(trans.msg) !== -1) {
        msg = `${trans.chinese} `;
      }
    });
    message.error(msg);
    return { data: null, code: '', msg };
  }
  if (data && data.errors && data.errors.length > 0) {
    let msg = '';
    data.errors.forEach((error) => {
      folioErrorTranslate.forEach((trans) => {
        if (trans.msg === error.message || error.message.indexOf(trans.msg) !== -1) {
          msg += `${trans.chinese} `;
        }
      });
    });
    message.error(msg);
    return { data: null, code: '', msg: data.errors };
  }
  if (data && data.errorMessage) {
    let msg = '';
    folioErrorTranslate.forEach((trans) => {
      if (data.errorMessage.indexOf(trans.msg) !== -1) {
        msg = `${trans.chinese} `;
      }
    });
    message.error(msg);
    return { data: null, code: '', msg: data.errorMessage };
  }
  // 过滤掉 folio 接口的返回 422 或者 500
  if (data.statusCode === 422 || data.statusCode === 500) {
    message.error(`服务器错误 ${data.statusCode}`);
    return { data: null, code: '', msg: '服务端错误' };
  }

  return data;
}, (error) => {
  const { response } = error;
  console.log('error', error);
  if (error && error.type && error.type === 'Timeout') {
    message.error(`请求超时`);
    return { data: null, code: '', msg: '请求超时' };
  }
  const { status, url } = response;
  if (response.status === 401) {
    // 401 认证失败
    // const { redirect } = getPageQuery();
    if (router.currentRoute.value.path !== '/') {
      router.replace('/');
      // clearLoginInfo(); // 清除所有用户缓存
      message.error('登录失效，请重新登录');
      return response;
    }
  } else if (response.status === 403) {
    message.error(`请求错误 ${status}: ${url}`);
    return { data: null, code: '', msg: '请求 403 错误' };
  } else if (response.status === 404) {
    message.error('请求地址不存在');
    return { data: null, code: '', msg: '请求地址不存在' };
  } else if (response.status === 504) {
    message.error(`网关超时 ${status}: ${url}`);
    return { data: null, code: '', msg: '网关超时' };
  }
  if (!response) {
    message.error('服务端错误');
    return { data: null, code: '', msg: '服务端错误' };
  }
  return response;
});

export default request
