
import React from 'react';

import Component from './Component';


function HOC() {

  React.useEffect(() => {
    document.title = `LiveDune | Вход`;
  }, []);

  return <Component />;
}

export default React.memo(HOC);
