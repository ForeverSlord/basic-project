import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

const Home = () => import('../views/Home');
const Login = () => import('../views/Login');
Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      // key: 0,
      parent: false,
      title: '首页',
      menu: {
        icon: 'home'
      }
    },
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      // key: 0,
      parent: false,
      title: '商品',
      menu: {
        icon: 'setting'
      }
    },
    component: Home
  },
  {
    path: '/product-list',
    name: 'product-list',
    meta: {
      parent: 'product',
      title: '商品列表'
    },
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (store.state.token !== null) {
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    // const hasAuthority = store.state.pages.some((item) => item.path === to.path);
    // console.log(hasAuthority);
    if (store.state.token !== null) {
      next();
    } else {
      next({
        path: '/login'
      });
    }
  }
});

export default router;
