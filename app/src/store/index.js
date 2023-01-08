
import { name as signUpReducerName, reducer as signUpReducer } from '@modules/sign-up';
import { name as resetPasswordReducerName, reducer as resetPasswordReducer } from '@modules/reset-password';
import { reducer as formReducer } from 'redux-form';

import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    form: formReducer,
    [signUpReducerName]: signUpReducer,
    [resetPasswordReducerName]: resetPasswordReducer,
  },
});