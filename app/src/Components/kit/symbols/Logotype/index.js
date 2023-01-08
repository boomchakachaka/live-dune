
import React from 'react';
import types from 'prop-types';

import Small from './Small';
import Middle from './Middle';


const SIZE_SMALL = 'small';
const SIZE_MIDDLE = 'middle';


function Factory({ size, ...rest }) {
  switch(size) {
    case SIZE_SMALL: return <Small { ...rest } />;
    default: return <Middle { ...rest } />;
  }
}

Factory.propTypes = {
  size: types.oneOf([SIZE_SMALL, SIZE_MIDDLE]),
};

Factory.defaultProps = {
  size: SIZE_MIDDLE,
};

export default Factory;
