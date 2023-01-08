
import React, { useMemo } from 'react';

import styles from './default.module.scss';


function Text({ className, children, ...rest }) {
  const textClassName = useMemo(() => styles['level'], [className]);

  return (
    <p className={textClassName} {...rest}>{ children }</p>
  );
}

export default Text;
