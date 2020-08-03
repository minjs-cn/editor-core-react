import React from 'react';
import { Tabs } from 'antd';
import Resizer from '../dock-resizer';

import styles from './index.module.css';

export interface Layout {
  direction?: 'row' | 'col';
  children: Layout[];
  title?: string;
  name?: React.FunctionComponent<any>;
  type?: 'dock' | 'tab' | 'page';
  flex: number;
  key?: string;
}

const Dock: React.FC<Layout> = (props: Layout) => {
  let pane = null;

  if (props.type === 'tab') {
    pane = (
      <Tabs type="card" defaultActiveKey="0" className={styles.tabs} size="small">
        {props.children.map((prop, i) => (
          <Tabs.TabPane key={'tabpane_' + i} tab={prop.title}>
            {prop.name ? React.createElement(prop.name) : null}
          </Tabs.TabPane>
        ))}
      </Tabs>
    );
  } else if (props.type === 'page') {
    pane = props.name ? React.createElement(props.name) : null;
  } else {
    pane = props.children.map((prop, i) => (
      <React.Fragment key={'dock_' + i}>
        <Dock {...prop} />
        {i !== props.children.length - 1 ? <Resizer direction={prop.direction} /> : null}
      </React.Fragment>
    ));
  }

  const { direction = 'row' } = props;

  return (
    <div className={styles.dock + ' ' + styles[direction]} style={{ flex: props.flex }}>
      {pane}
    </div>
  );
};

export default Dock;
