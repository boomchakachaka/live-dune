
import React from 'react';

import cn from 'clsx';
import styles from './default.module.scss';


function Middle({ }) {
  const logotypeClassName = React.useMemo(() => cn(styles['logotype'], { }), [])

  return (
    <span className={logotypeClassName} />
  );
}

export default Middle;
