/*
 * @Author: Y
 * @Date: 2022-01-12 14:29:36
 * @Description: 
 */
import axios from '@/service/axiosMiddleware';

interface PaginationData {
  current: number;
  size: number;
}

interface QueryParams {
  source: string;
  instanceId: string;
}
// 图书登到查询
export async function query(data: any) {
  return axios(`/api/jtlsp/capub/item/searchItemInstance`, {
    method: 'POST',
    data,
  });
}

// 图书登到查询
export async function queryDetail(params: QueryParams) {
  // instanceId: string
  return axios(`/api/jtlsp/capub/item/getInstanceDetails`, {
    // ?source=SUBMISSION&instanceId=${instanceId}
    method: 'GET',
    params,
  });
}

// 图书登到底库数据查询
export async function queryMetaData(data: any) {
  return axios(`/api/jtlsp/capub/referenceMetadatas/search`, {
    method: 'POST',
    data,
  });
}

// 图书登到
export async function bookRegister(data: any) {
  return axios('/api/jtlsp/capub/receive/add', {
    method: 'POST',
    data,
  });
}

// 查询日志
export async function queryLog(pageData: any) {
  const url = `/api/jtlsp/capub/receiveLog/searchToday?current=${pageData.current}&size=${pageData.size}`;
  return axios(url, {
    method: 'GET',
  });
}

// 删除日志
export async function deleteLog(ids: any[]) {
  const url = `/api/jtlsp/capub/sysLog/remove`;
  return axios(url, {
    method: 'DELETE',
    data: ids,
  });
}
// 获取来源
export async function getLocationList() {
  return axios('/api/jtlsp/capub/item/getLocationList', {
    method: 'GET',
  });
}

// 书设置破损标记
export async function setBookDamage(data: any) {
  return axios(`/api/jtlsp/capub/item/damageBook?updatedId=${data.updatedBy}`, {
    method: 'POST',
    data: data.ids,
  });
}

export async function addInstance(data: any) {
  return axios('/api/jtlsp/capub/receive/addInstance', {
    method: 'POST',
    data,
  });
}

export async function copyInstance(data: any) {
  return axios('/api/jtlsp/capub/receive/copyInstance', {
    method: 'POST',
    data,
  });
}

export async function refreshAdd(data: any) {
  return axios('/api/jtlsp/capub/receive/add', {
    method: 'POST',
    data,
  });
}

// 复本登到
export async function addItem(data: any) {
  return axios('/api/jtlsp/capub/item/addItem', {
    method: 'POST',
    data,
  });
}
// 复本删除
export async function removeItem(data: any) {
  return axios(`/api/jtlsp/capub/item/removeItem?id=${data}`, {
    method: 'DELETE',
  });
}

// 附件登到
export async function addAttachment(data: any) {
  return axios('/api/jtlsp/capub/item/addItemAttachment', {
    method: 'POST',
    data,
  });
}
// 附件删除
export async function removeAttachment(data: any) {
  return axios(`/api/jtlsp/capub/item/removeItemAttachment?id=${data}`, {
    method: 'DELETE',
  });
}

export async function removeInstance(data: any) {
  return axios('/api/jtlsp/capub/receive/removeInstance', {
    method: 'DELETE',
    data,
  });
}

// 附件类型下拉 options 列表
export async function getAttachmentType() {
  return axios('/api/jtlsp/system/dictionary/getAttachmentType', {
    method: 'GET',
  });
}

// 征集方式下拉框
export async function getSourceOptions() {
  return axios('/api/jtlsp/system/dictionary/getSource', {
    method: 'GET',
  });
}

// 来源方下拉框
export async function getSourcePartOptions() {
  return axios('/api/jtlsp/system/dictionary/getDicDetailsByCodeType?codeType=source_part', {
    method: 'GET',
  });
}

// 日志数据
export async function getLogs(data: PaginationData) {
  return axios('/api/jtlsp/capub/sysLog/searchToday', {
    method: 'GET',
    params: data,
  });
}

// 验证套装号是否存在
export async function validatePackageNo(data: any) {
  return axios('/api/jtlsp/capub/receive/checkPackageNumberExists', {
    method: 'GET',
    params: data,
  });
}

// 验证版本版次是否存在
export async function validateRefreshVersionEdition(data: any) {
  return axios('/api/jtlsp/capub/receive/checkReprintSameVersionExists', {
    method: 'POST',
    data,
  });
}

// 生成虚拟资产码
export async function generalVirtalAssetCode(data: any) {
  return axios('/api/jtlsp/capub/item/generateVtAssetcd', {
    method: 'POST',
    data,
  });
}

// instance 类型下拉 options 列表
export async function getInstanceType() {
  return axios('/api/jtlsp/system/dictionary/getInstanceType', {
    method: 'GET',
  });
}

export async function previousPrintBoxNumber() {
  return axios('/api/jtlsp/capub/receive/previousPrintBoxNumber', {
    method: 'GET',
  });
}

export async function updateSealDoneFlag(data: any) {
  return axios('/api/jtlsp/capub/receive/updateSealDoneFlag', {
    method: 'POST',
    data,
  });
}

export async function getVirtualPackageNo(name: string) {
  return axios(`/api/jtlsp/capub/receive/generateVirtualPackageNo?userName=${name}`, {
    method: 'POST',
  });
}

export async function getPackageList(packageNo: string) {
  return axios(`/api/jtlsp/capub/item/searchInstanceByPackage?packageNo=${packageNo}`, {
    method: 'GET',
  });
}

export async function getPackageDetail(instanceId: string) {
  return axios(`/api/jtlsp/capub/item/getPackageInstanceDetail?instanceId=${instanceId}`, {
    method: 'GET',
  });
}

export async function getBoxInfo(data: any) {
  return axios('/api/jtlsp/capub/boxHead/itemBoxInfo', {
    method: 'POST',
    data,
  });
}

export async function getUserInfo(userId: string) {
  return axios(`/api/jtlsp/system/userrole/getUserDetails?userId=${userId}`, {
    method: 'GET',
  });
}

// 验证寄存代管申报批次号是否存在
export async function validateDepositNo(depositNo: string) {
  return axios(
    `/api/jtlsp/capub/externalBusinessHead/isExistsDeclareBatch?declareBatch=${depositNo}`,
    {
      method: 'GET',
    },
  );
}

export async function removePackage(data: any) {
  return axios(`/api/jtlsp/capub/receive/removePackageInsList?`, {
    method: 'POST',
    data,
  });
}

// 判断箱号是否重复与寄存代管同用
export async function checkRegisterBoxNo(data: any) {
  return axios(`/api/jtlsp/capub/boxHead/checkRegisterBoxNo`, {
    method: 'POST',
    data,
  });
}
// 加入套装清单
export async function addInsToPackage(data: any) {
  return axios(`/api/jtlsp/capub/receive/addInsToPackage`, {
    method: 'POST',
    data,
  });
}

// 新建套装弹窗 套装信息查询
export async function searchInsPkgAndGroup(data: any) {
  return axios(`/api/jtlsp/capub/receive/getUnReleasePkg`, {
    method: 'GET',
    params: data,
  });
}

// 关联下级套装搜索
export async function searchInsByPkgType(data: any) {
  return axios(`/api/jtlsp/capub/item/searchInsByPkgType`, {
    method: 'GET',
    params: data,
  });
}

// 关联下级套装
export async function insertPackage(data: any) {
  return axios(`/api/jtlsp/capub/receive/insertPackage`, {
    method: 'POST',
    data,
  });
}
// 删除关联套装
export async function removePackageRef(data: any) {
  return axios(`/api/jtlsp/capub/receive/removePackageRef`, {
    method: 'POST',
    data,
  });
}
// 套装新建modal新增
export async function confirmAddPkg(data: any) {
  return axios(`/api/jtlsp/capub/receive/confirmAddPkg`, {
    method: 'POST',
    data,
  });
}

// 套装清单查询
export async function groupInstances(data: any) {
  return axios(`/api/jtlsp/capub/receive/groupInstances`, {
    method: 'POST',
    data,
  });
}
// 获取资产码信息
export async function getDetailsBySuperInsId(superInsId: string) {
  return axios(`/api/jtlsp/capub/receive/getDetailsBySuperInsId?superInsId=${superInsId}`, {
    method: 'GET',
  });
}

// 获取品相接口
export async function getCondition() {
  return axios(`/api/jtlsp/system/dictionary/getDicDetailsByCodeType?codeType=condition`, {
    method: 'GET',
  });
}
// 获取专题接口
export async function getTopic() {
  return axios(`/api/jtlsp/system/dictionary/getDicDetailsByCodeType?codeType=topic`, {
    method: 'GET',
  });
}
// // 获取份数接口
// export async function getInsCopyNum(data: any) {
//   return axios(`/api/jtlsp/capub/receive/getInsCopyNum`, {
//     method: 'POST',
//     data,
//   });
// }

// 修改份数接口
export async function modifyInsCopyNum(data: any) {
  return axios(`/api/jtlsp/capub/receive/modifyInsCopyNum`, {
    method: 'POST',
    data,
  });
}
