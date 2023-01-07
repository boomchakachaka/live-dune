
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'modules/reset-password';

const initialState = {
  isError: false,
  inProcess: false,
  isSuccess: false,
  error: null,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['isError'] = false;
      state['inProcess'] = false;
      state['isSuccess'] = false;
      state['error'] = null;
    },

    resetPasswordRequestAction(state) {
      state['inProcess'] = true;
    },
    resetPasswordRequestFailAction(state) {
      state['isError'] = true;
      state['inProcess'] = false;
    },
    resetPasswordRequestSuccessAction(state) {
      state['isSuccess'] = true;
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  resetPasswordRequestAction,
  resetPasswordRequestFailAction,
  resetPasswordRequestSuccessAction,
} = slice['actions'];

export const selectIsError = (state) => state[REDUCER_NAME]['isError'];
export const selectIsSuccess = (state) => state[REDUCER_NAME]['isSuccess'];
export const selectInProcess = (state) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
