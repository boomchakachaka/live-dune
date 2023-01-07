
import { reducer as signUpReducer } from '@modules/sign-up';
import { reducer as formReducer } from 'redux-form';

import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    form: formReducer,
    signUp: signUpReducer,
  },
});