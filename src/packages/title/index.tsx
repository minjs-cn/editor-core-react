import React from 'react';

import props, { Props } from './props';
import styles from './index.module.css';

const MyTitle: React.FC<Props> = ({ title = props.title, color = props.color }: Props) => {
  return (
    <h1
      className={styles.main}
      style={{
        color,
      }}>
      {title}
    </h1>
  );
};

export default MyTitle;
