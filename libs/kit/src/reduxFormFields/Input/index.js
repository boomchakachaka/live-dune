
import { Input } from '@libs/kit';

import React from 'react';
import types from 'prop-types';
import { Field } from 'redux-form';

import BaseField from '../BaseField';


function BaseInputField({ input, meta: { error, invalid, touched, active }, ...props }) {
  return (
    <BaseField
      {...props}
      {...input}
      error={( !! touched && invalid && ! active) ? error : null}
    >
      <Input />
    </BaseField>
  );
}

function InputField({ name, type, ...rest }) {
  return (
    <Field
      name={name}
      type={type}
      {...rest}
      component={BaseInputField}
    />
  );
}

InputField.propTypes = {
  name: types.string.isRequired,
  type: types.string,
  mode: types.oneOf(['default', 'primary', 'danger']),
};

InputField.defaultProps = {
  name: null,
  type: null,
  mode: 'default',
};

export default InputField;
