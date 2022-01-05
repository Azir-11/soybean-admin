import { getLoginModuleRegExp } from '@/utils';
import { LoginModuleKey } from '@/interface';

/** 固定的路由 */
const constantRoutes: AuthRoute.Route[] = [
  {
    name: 'root',
    path: '/',
    redirect: '/dashboard/analysis',
    meta: {
      title: 'Root'
    }
  },
  {
    name: 'login',
    path: '/login',
    component: 'self',
    props: route => {
      const moduleType = (route.params.module as LoginModuleKey) || 'pwd-login';
      return {
        module: moduleType
      };
    },
    meta: {
      title: '登录',
      dynamicPath: `/login/:module(${getLoginModuleRegExp()})?`,
      singleLayout: 'blank'
    }
  },
  {
    name: 'no-permission',
    path: '/no-permission',
    component: 'self',
    meta: {
      title: '无权限',
      singleLayout: 'blank'
    }
  },
  {
    name: 'not-found',
    path: '/not-found',
    component: 'self',
    meta: {
      title: '未找到',
      singleLayout: 'blank'
    }
  },
  {
    name: 'service-error',
    path: '/service-error',
    component: 'self',
    meta: {
      title: '服务器错误',
      singleLayout: 'blank'
    }
  },
  // 匹配无效的路径重定向not-found的页面
  {
    name: 'not-found-page',
    path: '/:pathMatch(.*)*',
    component: 'blank',
    meta: {
      title: '未找到',
      singleLayout: 'blank'
    }
  }
];

export default constantRoutes;
