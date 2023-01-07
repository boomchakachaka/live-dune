
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'modules/sign-up';

const initialState = {
  error: null,
  inProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['error'] = null;
      state['inProcess'] = false;
    },

    resetErrorAction(state) {
      state['error'] = null;
    },

    signUpRequestAction(state) {
      state['inProcess'] = true;
      state['error'] = null;
    },
    signUpRequestFailAction(state, { payload }) {
      state['inProcess'] = false;
      state['error'] = payload;
    },
    signUpRequestSuccessAction(state) {
      state['inProcess'] = false;
      state['error'] = null;
    },
  },
});

export const {
  resetStateAction,

  resetErrorAction,

  signUpRequestAction,
  signUpRequestFailAction,
  signUpRequestSuccessAction,
} = slice['actions'];

export const selectError = (state) => state[REDUCER_NAME]['error'];
export const selectInProcess = (state) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
