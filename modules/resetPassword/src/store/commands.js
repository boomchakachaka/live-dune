
import {
  resetPasswordRequestAction,
  resetPasswordRequestFailAction,
  resetPasswordRequestSuccessAction,
} from './slice';


export const resetPassword = (dataFrom) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequestAction());

    const result = await fetch({
      url: '/reset/password',
      method: 'post',
      data: dataFrom,
    });

    dispatch(resetPasswordRequestSuccessAction(result));
  }
  catch (error) {
    dispatch(resetPasswordRequestFailAction(error['data']));
  }
};
