
import { Spinner } from '@libs/kit';

import React, { useMemo } from 'react';

import cn from 'clsx';
import styles from './default.module.scss';


function Primary({ className, children, disabled, inProcess, size, icon, ...rest }) {

  const buttonClassName = useMemo(() => cn(className, styles['button'], {
    [styles['disabled']]: disabled,
    [styles['in-process']]: inProcess,
  },{
      [styles['size--small']]: size === 'small',
      [styles['size--large']]: size === 'large',
    },
    {
      [styles['with-icon']]: icon,
    },
  ), [className, inProcess, disabled]);

  return (
    <button
      {...rest}
      className={buttonClassName}
      disabled={inProcess || disabled}
    >
      { icon && (
        <span className={`icon-${icon}`} />
      )}
      { children && (
        <span className={styles['text']}>{ children }</span>
      )}
      {inProcess && (
        <div className={styles['spinner']}>
          <Spinner />
        </div>
      )}
    </button>
  );
}

export default Primary;
