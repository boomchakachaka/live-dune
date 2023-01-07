
import React from 'react';
import types from 'prop-types';

import styles from './default.module.scss';


function BaseField({ children, error, ...props }) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        {React.cloneElement(children, {
          ...props,
          mode: !! error ? 'danger' : props['mode'],
        })}
      </div>
      { !! error && (
        <div className={styles['error']}>
          <span className={styles['message']}>{ error }</span>
        </div>
      )}
    </div>
  );
}

BaseField.propTypes = {
  children: types.any,
  error: types.string,
};

BaseField.defaultProps = {
  children: null,
  error: null
};

export default BaseField;
