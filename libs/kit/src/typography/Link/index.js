
import React from 'react';
import types from 'prop-types';

import Default from './Default';


const LEVEL_DEFAULT = 'default';


function Factory({ level, ...rest }) {
  switch (level) {
    default: return <Default {...rest} />;
  }
}

Factory.propTypes = {
  level: types.oneOf([LEVEL_DEFAULT]),
  href: types.string,
};

Factory.defaultProps = {
  level: LEVEL_DEFAULT,
  href: '#',
};

export default Factory;
