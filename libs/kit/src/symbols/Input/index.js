
import React from 'react';
import types from 'prop-types';

import InputText from './Text';


const TYPE_TEXT = 'text';
const TYPE_PASSWORD = 'password';


function Factory({ type, ...rest }) {
  switch(type) {
    case TYPE_PASSWORD: return <InputText type={'password'} {...rest} />;
    default: return <InputText {...rest} />;
  }
}

Factory.propTypes = {
  type: types.oneOf([TYPE_TEXT, TYPE_PASSWORD]),
};

Factory.defaultProps = {
  type: TYPE_TEXT,
};

export default Factory;
