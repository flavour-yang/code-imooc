const microApps = [
  {
    name: 'react-app',
    entry: 'http://localhost:8888',
    container: '#reactApp',
    activeRule: '/react-app',
  },
  // {
  //   name: 'sub-react',
  //   entry: process.env.VUE_APP_SUB_REACT,
  //   activeRule: '/sub-react'
  // },
  // {
  //   name: 'sub-html',
  //   entry: process.env.VUE_APP_SUB_HTML,
  //   activeRule: '/sub-html'
  // }
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: '#reactApp', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: {}, // 下发getGlobalState方法
    },
  };
});

export default apps;
