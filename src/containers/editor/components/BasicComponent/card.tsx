import React from 'react';
import { BasicComponentType } from '../../../../packages';

import styles from './card.module.css';

const ComponentCard: React.FC<BasicComponentType> = (props: BasicComponentType) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.thumbnail} alt="BasicComponent" />
      <div className={styles.meta}>{props.label + ' ' + props.version}</div>
    </div>
  );
};

export default ComponentCard;
