
import { resetPassword } from '@modules/reset-password';

import React from 'react';
import { useDispatch } from 'react-redux';

import FormModify from './Form';


function ResetPasswordPage() {
  const dispatch = useDispatch();

  function handlerSubmit(formData) {
    dispatch(resetPassword(formData));
  }

  return (
    <FormModify onSubmit={(data) => handlerSubmit(data)} />
  );
}

export default ResetPasswordPage;
