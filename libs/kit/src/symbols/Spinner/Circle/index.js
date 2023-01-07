
import React from 'react';

import styles from './default.module.scss';


function Circle() {
  return (
    <div className={styles['wrapper']}>
      <span className={styles['spinner']} />
    </div>
  );
}

export default React.memo(Circle);
