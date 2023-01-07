
import React from 'react';
import { useDispatch } from 'react-redux';

import Component from './Component';


function HOC() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.title = `LiveDune | Смена пароля`;
  }, []);

  return <Component />;
}

export default React.memo(HOC);
