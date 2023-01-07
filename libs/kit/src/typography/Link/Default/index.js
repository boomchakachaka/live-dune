
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import cn from 'clsx';
import styles from './default.module.scss';


function LinkHref({ className, href, children, ...rest }) {
  const linkClassName = useMemo(() => cn(styles['link'], className), [className]);

  return (
    <Link className={linkClassName} {...rest} to={href}>{ children }</Link>
  );
}

export default LinkHref;
