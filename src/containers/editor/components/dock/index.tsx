import React from 'react';
import { Tabs } from 'antd';
import Resizer from '../dock-resizer';

import styles from './index.module.css';

export interface Layout {
  direction?: 'row' | 'col';
  children: Layout[];
  title?: string;
  name?: React.FunctionComponent<Layout>;
  type?: 'dock' | 'tab' | 'page';
  flex: number;
}

const Dock: React.FC<Layout> = (props: Layout) => {
  let children = null;

  if (props.type === 'tab') {
    children = React.createElement(
      Tabs,
      {
        type: 'card',
        defaultActiveKey: '0',
        className: styles.tabs,
        size: 'small',
      },
      props.children.map((prop, i) =>
        React.createElement(
          Tabs.TabPane,
          {
            key: i,
            tab: prop.title,
          },
          prop.name ? [React.createElement(prop.name)] : []
        )
      )
    );
  } else if (props.type === 'page') {
    return props.name ? React.createElement(props.name) : null;
  } else {
    children = props.children.map((prop, i) => (
      <>
        <Dock {...prop} />
        {i !== props.children.length - 1 ? <Resizer direction={prop.direction} /> : null}
      </>
    ));
  }

  const { direction = 'row' } = props;

  return (
    <div className={styles.dock + ' ' + styles[direction]} style={{ flex: props.flex }}>
      {children}
    </div>
  );
};

export default Dock;
