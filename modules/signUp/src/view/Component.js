
import { signUp } from '@modules/sign-up';

import React from 'react';
import { useDispatch } from 'react-redux';

import SignUpForm from './SignUpForm';


function SignUp() {
  const dispatch = useDispatch();

  return (
    <SignUpForm onSubmit={(data) => dispatch(signUp(data))} />
  );
}

export default SignUp;
