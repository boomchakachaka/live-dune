
import React, { useMemo } from 'react';

import cn from 'clsx';
import styles from './default.module.scss';


function InputText({ className, mode, children, disabled, inFocus, onFocus, onBlur, onChange, value, readOnly, name, placeholder, ...rest }) {
  const [isFocus, setFocus] = React.useState(false);

  const wrapperClassName = useMemo(() => cn(className, styles['wrapper'], {
    [styles['mode--danger']]: mode === 'danger',
  }, {
    [styles['disabled']]: disabled,
    [styles['focused']]: isFocus,
    [styles['read-only']]: readOnly,
    }
  ), [className, mode, isFocus, readOnly]);

  function handleFocus(event) {
    setFocus(true);

    if (onFocus) {
      onFocus(event);
    }
  }

  function handleChange(event) {
    if (onChange) {
      onChange(event);
    }
  }

  function handleBlur(event) {
    setFocus(false);

    if (onBlur) {
      onBlur(event);
    }
  }

  function hasPlaceholder() {
    if (disabled) {
      return false;
    }

    if (readOnly) {
      return false;
    }

    if (placeholder) {
      return  ! value ;
    }

    return false;
  }

  const isPlaceholder = hasPlaceholder();

  return (
    <div className={wrapperClassName}>
      <input
        className={styles['input']}
        disabled={disabled}
        onClick={handleFocus}
        readOnly={readOnly}
        name={name}
        value={value}
        onFocus={(event) => handleFocus(event)}
        onChange={(event) => handleChange(event)}
        onBlur={(event) => handleBlur(event)}
        {...rest} />

      {isPlaceholder && (
        <div className={cn(styles['placeholder'], { [styles['active']]: isFocus })}>
          <span className={styles['caption']}>{ placeholder }</span>
        </div>
      )}
    </div>
  );
}

export default InputText;
