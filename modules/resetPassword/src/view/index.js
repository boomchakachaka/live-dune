
import { resetStateAction } from '@modules/reset-password';

import React from 'react';
import { useDispatch } from 'react-redux';

import Component from './Component';


function HOC() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.title = `LiveDune | Восстановление пароля`;
  }, []);

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction())
    }
  }, []);

  return <Component />;
}

export default React.memo(HOC);
