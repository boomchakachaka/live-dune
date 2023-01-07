
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormModify from './Form';


function ConfirmEmailPage() {
  const dispatch = useDispatch();

  function handlerSubmit(formData) {

  }

  return (
    <FormModify onSubmit={(data) => handlerSubmit(data)} />
  );
}

export default ConfirmEmailPage;
