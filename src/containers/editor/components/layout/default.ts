import { Layout } from '../dock';
import BasicComponent from '../BasicComponent';
import CombinedComponent from '../CombinedComponent';
import Preview from '../preview';

const layout: Layout = {
  direction: 'row',
  flex: 1,
  children: [
    {
      direction: 'col',
      flex: 0.2,
      children: [
        {
          direction: 'row',
          flex: 0.5,
          type: 'tab',
          children: [
            {
              direction: 'row',
              flex: 1,
              title: '基本组件',
              children: [],
              name: BasicComponent,
            },
            {
              direction: 'row',
              flex: 1,
              title: '合成组件',
              children: [],
              name: CombinedComponent,
            },
            {
              direction: 'row',
              flex: 1,
              title: '远程组件',
              children: [],
              name: CombinedComponent,
            },
          ],
        },
        {
          direction: 'row',
          flex: 0.5,
          type: 'tab',
          children: [
            {
              direction: 'row',
              flex: 1,
              title: '组件树',
              children: [],
              name: BasicComponent,
            },
            {
              direction: 'row',
              flex: 1,
              title: '工作区',
              children: [],
              name: CombinedComponent,
            },
          ],
        },
      ],
    },
    {
      direction: 'col',
      flex: 0.5,
      children: [
        {
          flex: 1,
          type: 'page',
          name: Preview,
          children: [],
        },
      ],
    },
    {
      direction: 'col',
      flex: 0.3,
      children: [
        {
          direction: 'row',
          flex: 0.5,
          type: 'tab',
          children: [
            {
              direction: 'row',
              flex: 1,
              title: '基础属性',
              children: [],
              name: BasicComponent,
            },
            {
              direction: 'row',
              flex: 1,
              title: '组件属性',
              children: [],
              name: CombinedComponent,
            },
          ],
        },
        {
          direction: 'row',
          flex: 0.5,
          type: 'tab',
          children: [
            {
              direction: 'row',
              flex: 1,
              title: '事件编辑',
              children: [],
              name: BasicComponent,
            },
            {
              direction: 'row',
              flex: 1,
              title: '动画编辑',
              children: [],
              name: CombinedComponent,
            },
          ],
        },
      ],
    },
  ],
};

export default layout;
