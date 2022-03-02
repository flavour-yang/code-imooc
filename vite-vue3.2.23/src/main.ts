import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
// import VueLazyload from 'vue-lazyload'

// import SvgIcon from '@/components/SvgIcon/index.vue'
// 全局样式
import './styles/index.scss'
import 'ant-design-vue/dist/antd.css'
// const modules = import.meta.glob('./icons/svg/*.svg')

// for (const path in modules) {
//   modules[path]()
//   console.log(modules[path]().then((mod) => console.log(mod.default)))

// }
// import '@/icons'
// import '@/components/SLink/index.js'
// element3
// import element3 from 'plugins/element3'

// router
import router from './router'
// store
import store from '@/store'
createApp(App)
  // .component('SvgIcon', SvgIcon)
  // .use(VueLazyload, {
  //   preLoad: 1.3,
  //   error: '@/assets/nocover.png',
  //   loading: '@/assets/nocover.png',
  //   attempt: 1
  // })
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app')
