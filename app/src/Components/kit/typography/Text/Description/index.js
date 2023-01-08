
import React, { useMemo } from 'react';

import styles from './default.module.scss';


function Description({ className, children, ...rest }) {
  const textClassName = useMemo(() => styles['text'], [className]);

  return (
    <p className={textClassName} {...rest}>{ children }</p>
  );
}

export default Description;
