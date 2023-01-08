
import React from 'react';

import cn from 'clsx';

import styles from './default.module.scss';


function Level1({ children, className }) {
  return (
    <h1 className={cn(styles['level'], className)}>{ children }</h1>
  );
}

export default Level1;
