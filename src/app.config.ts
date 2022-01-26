export const pages = {
  home: 'pages/home/index',
}
export const subpages = {
  // 二级页面
  myTask: 'pages/subpages/my-task/index',
}

export default {
  pages: Object.values(pages),
  subpackages: Object.values(subpages).map((page) => ({
    root: page.replace('/index', ''),
    pages: ['index'],
  })),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  // tabBar: {
  //   // custom: true,
  //   color: '#ACACAC',
  //   backgroundColor: '#fff',
  //   selectedColor: '#242424',
  //   borderStyle: 'black',
  //   list: [
  //     {
  //       text: '首页',
  //       pagePath: pages.home,
  //       iconPath: 'assets/images/tabs-home.png',
  //       selectedIconPath: 'assets/images/tabs-home-active.png',
  //     },
  //     {
  //       text: '我的',
  //       pagePath: pages.mine,
  //       iconPath: 'assets/images/tabs-mine.png',
  //       selectedIconPath: 'assets/images/tabs-mine-active.png',
  //     },
  //   ],
  //   position: 'bottom',
  // },
  // 可设置自己的组件,自定义的无法支持webView,这里暂时关闭
  // usingComponents: {
  //   'custom-tab-bar': 'custom-tab-bar/home',
  // },
}
