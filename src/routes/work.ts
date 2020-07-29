import WorkList from 'src/containers/work/components/list';
import WorkEdit from 'src/containers/work/components/edit';

export const workRoutes = [
  {
    path: '/edit',
    title: '添加工作区',
    component: WorkEdit,
  },
  {
    path: '/',
    title: '工作区',
    component: WorkList,
  },
];
