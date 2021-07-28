// 权限拦截 导航守卫 路由守卫 router
import router from '@/router' // 引入路由实例
// 导入token 查看是否存在token 如果有token 放过 没有token跳转登录页
import store from '@/store'
import NProgress from 'nprogress' // 引入一份进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式

// 设置页面跳转白名单
const whiteRouter = ['/404', '/login']

// 设置前置导航守卫  to 代表去道德页面 在导航守卫当中只要有if 的就一定要else
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启进度条
  const token = store.getters.token
  // 如果token存在 就next()
  if (token) {
    // 没有用户信息 就获取到用户信息
    if (!store.getters.userinfo.userId) {
      store.dispatch('user/getuserInfo')
    }

    // 有token去登录页 就直接到首页 没有则直接放走
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteRouter.includes(to.path)) {
      next()
    } else {
      // 注意在导航守卫当中出现跳转使用next()
      next('/login')
    }
  }
})

router.afterEach((to, from, next) => {
  NProgress.done() // 关闭进度条
})
