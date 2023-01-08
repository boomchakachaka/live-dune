
import React from 'react';
import types from 'prop-types';

import Default from './Default';
import Description from './Description';


const TYPE_DEFAULT = 'default';
const TYPE_DESCRIPTION = 'description';


function Factory({ type, ...rest }) {
  switch(type) {
    case TYPE_DESCRIPTION: return <Description {...rest} />
    default: return <Default {...rest} />;
  }
}

Factory.propTypes = {
  type: types.oneOf([TYPE_DEFAULT, TYPE_DESCRIPTION]),
};

Factory.defaultProps = {
  type: TYPE_DEFAULT,
};

export default Factory;
