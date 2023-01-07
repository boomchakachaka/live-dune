
import React from 'react';

import cn from 'clsx';

import styles from './default.module.scss';


function Level2({ children, className }) {
  return (
    <h2 className={cn(styles['level'], className)}>{ children }</h2>
  );
}

export default Level2;
