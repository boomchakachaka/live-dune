
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'reset-password';

const initialState = {
  inProcess: false,
  isSuccess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['inProcess'] = false;
      state['isSuccess'] = false;
    },

    resetPasswordRequestAction(state) {
      state['inProcess'] = true;
    },
    resetPasswordRequestFailAction(state) {
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

export const selectIsSuccess = (state) => state[REDUCER_NAME]['isSuccess'];
export const selectInProcess = (state) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
