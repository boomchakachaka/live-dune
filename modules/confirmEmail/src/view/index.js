
import React from 'react';

import Component from './Component';


function HOC() {

  React.useEffect(() => {
    document.title = `LiveDune | Подтверждение Email`;
  });

  return <Component />;
}

export default React.memo(HOC);
