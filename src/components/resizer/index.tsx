import React from 'react';
import useTranslate from 'src/hooks/useTranslate';
import { EnumDirection } from 'src/hooks/enum';

import styles from './index.module.css';

function Resizer({ direction = EnumDirection.Row }) {
  const [style, onMousedown] = useTranslate(direction);

  return <div className={styles.resizer + ' ' + styles[direction]} style={style} onMouseDown={onMousedown}></div>;
}

export default Resizer;
