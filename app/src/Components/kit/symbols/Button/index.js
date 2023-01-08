
import React from 'react';
import types from 'prop-types';

import Default from './Default';


const TYPE_SUBMIT = 'submit';
const TYPE_BUTTON = 'button';

const MODE_PRIMARY = 'primary';

const FORM_DEFAULT = 'default';


function Factory({ form, ...rest }) {
  switch(form) {
    default: return <Default {...rest} />;
  }
}

Factory.propTypes = {
  mode: types.oneOf([MODE_PRIMARY]),
  form: types.oneOf([FORM_DEFAULT]),
  type: types.oneOf([TYPE_BUTTON, TYPE_SUBMIT]),
  onClick: types.func,
};

Factory.defaultProps = {
  mode: MODE_PRIMARY,
  form: FORM_DEFAULT,
  type: TYPE_BUTTON,
};

export default Factory;
