
import React from 'react';

import SignUpForm from './SignUpForm';


function SignUp() {

  return (
    <SignUpForm onSubmit={(data) => console.log(data)} />
  );
}

export default SignUp;
