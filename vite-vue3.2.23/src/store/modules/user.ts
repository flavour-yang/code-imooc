const state = {
  userInfo: '',
  selectVal: '',
  searchVal: ''
}

const mutations = {
  // RESET_STATE: (state) => {
  //   state.userInfo = ''
  // },
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
  // SET_SELECT_VAL: (state, val) => {
  //   state.selectVal = val
  // },
  // SET_SEARCH_VAL: (state, val) => {
  //   state.searchVal = val
  // },
  // SET_USER_INFO: (state, val) => {
  //   state.userInfo = val
  // }
}

const actions = {
  // // user login
  // login({ commit }, userInfo) {
  //   // const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     // login({ username: username.trim(), password: password }).then(response => {
  //     //   const { data } = response
  //     //   commit('SET_TOKEN', data.token)
  //     //   setToken(data.token)
  //     //   resolve()
  //     // }).catch(error => {
  //     //   reject(error)
  //     // })
  //   })
  // },

  // // get user info
  // getInfo({ commit, state }) {
  //   return new Promise((resolve, reject) => {

  //   })
  // },

  // // user logout
  // logout({ commit, state }) {
  //   return new Promise((resolve, reject) => {

  //   })
  // },

  // // remove token
  // resetToken({ commit }) {
  //   return new Promise(resolve => {
  //     removeUserInfo() // must remove  token  first
  //     commit('RESET_STATE')
  //     router.push('/login')
  //     resolve()
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

