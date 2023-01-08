
import React from 'react';

import styles from './default.module.scss';


function Middle() {
  return (
    <div className={styles['wrapper']}>
      <span className={styles['logotype']} />
      <span className={styles['beta']} />
    </div>
  );
}

export default Middle;
