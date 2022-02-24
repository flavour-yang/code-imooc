import { createStore } from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import bookRegister from './modules/book/register'

const store = createStore({
  modules: {
    app,
    settings,
    user,
    bookRegister
  },
  getters,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer: (state) => {
        return {
          // selectVal: state.user.selectVal,
          // searchVal: state.user.searchVal
        }
      }
    })
  ]
})

export default store
