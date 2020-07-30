import Home from 'src/containers/home';
import Editor from 'src/containers/editor';
import NotFound from 'src/containers/not-found';

export const mainRoutes = [
  {
    path: '/',
    exact: true,
    title: '首页',
    component: Home,
  },
  {
    path: '/editor',
    title: '编辑器',
    component: Editor,
  },
  {
    path: '/404',
    title: '404',
    component: NotFound,
  },
];
