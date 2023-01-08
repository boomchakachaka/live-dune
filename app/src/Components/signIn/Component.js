
import React from 'react';

import LoginForm from './LoginForm';


function SignInPage() {

  async function handleSubmit(data) {

  }

  return (
    <LoginForm
      onSubmit={ handleSubmit }
    />
  );
}

export default SignInPage;
