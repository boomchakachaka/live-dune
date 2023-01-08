
import { createSlice } from '@reduxjs/toolkit';


const REDUCER_NAME = 'sign-up';

const initialState = {
  inProcess: false,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['inProcess'] = false;
    },

    signUpRequestAction(state) {
      state['inProcess'] = true;
    },
    signUpRequestFailAction(state) {
      state['inProcess'] = false;
    },
    signUpRequestSuccessAction(state) {
      state['inProcess'] = false;
    },
  },
});

export const {
  resetStateAction,

  signUpRequestAction,
  signUpRequestFailAction,
  signUpRequestSuccessAction,
} = slice['actions'];

export const selectInProcess = (state) => state[REDUCER_NAME]['inProcess'];

export const name = slice['name'];
export const reducer = slice['reducer'];
