import React from 'react';

import styles from './index.module.css';

interface Props {
  direction?: 'row' | 'col';
}

const DockResizer: React.FC<Props> = ({ direction = 'row' }: Props) => {
  return <div className={styles.resizer + ' ' + styles[direction]}></div>;
};

export default DockResizer;
