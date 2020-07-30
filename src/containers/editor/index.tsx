import React from 'react';
import { Layout } from 'antd';

import styles from './index.module.css';
import MyLayout from './components/layout';

const Editor: React.FC = () => {
  return (
    <Layout className={styles.container}>
      <Layout.Header className={styles.header}></Layout.Header>
      <Layout.Content className={styles.content}>
        <MyLayout />
      </Layout.Content>
    </Layout>
  );
};

export default Editor;
