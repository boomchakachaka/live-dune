
import {
  resetPasswordRequestAction,
  resetPasswordRequestFailAction,
  resetPasswordRequestSuccessAction,
} from './slice';


export const resetPassword = () => async (dispatch) => {
  try {
    dispatch(resetPasswordRequestAction());

    setTimeout(async () => {
      dispatch(resetPasswordRequestSuccessAction());
    }, 1000)
  }
  catch (error) {
    dispatch(resetPasswordRequestFailAction(error['data']));
  }
};
