
import React from 'react';
import types from 'prop-types';

import Level1 from './Level1';
import Level2 from './Level2';


const LEVEL_1 = 1;
const LEVEL_2 = 2;


function Factory({ level, ...rest }) {
  switch(level) {
    case LEVEL_2: return <Level2 {...rest} />;
    default: return <Level1 {...rest} />;
  }
}

Factory.propTypes = {
  level: types.oneOf([LEVEL_1, LEVEL_2]),
};

Factory.defaultProps = {
  level: LEVEL_1,
};

export default Factory;
