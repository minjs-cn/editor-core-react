import React from 'react';

export type LayoutDirection = 'row' | 'col';

export interface LayoutPannel {
  children: [];
  type: LayoutDirection;
  flex: number;
}

export interface LayoutDock {
  children: LayoutPannel[];
  type: LayoutDirection;
  flex: number;
}

export interface Layout {
  type: LayoutDirection;
  children: LayoutDock[];
}

const useLayout = () => {
  const [state, setState] = React.useState<Layout>({
    type: 'row',
    children: [
      {
        type: 'col',
        flex: 0.2,
        children: [
          {
            type: 'row',
            flex: 0.5,
            children: [],
          },
          {
            type: 'row',
            flex: 0.5,
            children: [],
          },
        ],
      },
      {
        type: 'col',
        flex: 0.5,
        children: [
          {
            type: 'row',
            flex: 0.5,
            children: [],
          },
          {
            type: 'row',
            flex: 0.5,
            children: [],
          },
        ],
      },
      {
        type: 'col',
        flex: 0.3,
        children: [
          {
            type: 'row',
            flex: 0.5,
            children: [],
          },
          {
            type: 'row',
            flex: 0.5,
            children: [],
          },
        ],
      },
    ],
  });

  return [state, setState] as const;
};

export default useLayout;
