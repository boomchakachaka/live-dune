
import React from 'react';

import types from 'prop-types';

import Circle from './Circle';


const TYPE_CIRCLE = 'circle';


function Factory({ type, ...rest }) {
  switch(type) {
    default: return <Circle {...rest} />;
  }
}

Factory.propTypes = {
  type: types.oneOf([TYPE_CIRCLE]),
};

Factory.defaultProps = {
  type: TYPE_CIRCLE
};

export default React.memo(Factory);
