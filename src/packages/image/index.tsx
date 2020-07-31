import React from 'react';

import props, { Props } from './props';
import styles from './index.module.css';

const MyImage: React.FC<Props> = ({ isBorder = props.isBorder, url = props.url }: Props) => {
  return (
    <img
      className={styles.main}
      src={url}
      style={{
        borderRadius: isBorder ? '50%' : 0,
      }}
    />
  );
};

export default MyImage;
