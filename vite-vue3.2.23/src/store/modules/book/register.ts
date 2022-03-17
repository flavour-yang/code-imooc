/*
 * @Author: Y
 * @Date: 2022-01-12 14:32:56
 * @Description: 
 */
interface State {
  instanceData: any[];
  versionData: any[],
  currentType: string,
  searchValues: any,
  instanceId: string,
  instanceInfo: any,
  versionChecked: any[],
}
const state: State = {
  instanceData: [],
  versionData: [],
  currentType: '',
  searchValues: { type: 'isbn', text: '' },
  instanceId: '',
  instanceInfo: null,
  versionChecked: [],
}

const mutations = {
  SAVE_DATAS: (state: State, value: any) => {
    const keys = Object.keys(value)
    keys.map(item => state[item] = value[item])
  }
}

const actions = {
  // changeSetting({ commit }, data) {
  //   commit('CHANGE_SETTING', data)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
