
import {
  signUpRequestAction,
  signUpRequestFailAction,
  signUpRequestSuccessAction,
} from './slice';


export const signUp = ({...formData }) => async (dispatch) => {
  try {
    dispatch(signUpRequestAction());

    await fetch({
      url: '/sign-up',
      method: 'post',
      data: {
        ...formData,
      },
    });

    await dispatch(signUpRequestSuccessAction());
  }
  catch(error) {
    switch (error['code']) {
      case '1.1': dispatch(signUpRequestFailAction(`Неверный формат email (${error['code']})`)); break;
      case '1.2': dispatch(signUpRequestFailAction(`Неверная пара логин/пароль`)); break;
      case '1.3': dispatch(signUpRequestFailAction(`Пользователь "${formData['email']}" уже заведен в системе`)); break;
      default: dispatch(signUpRequestFailAction(`Попробуйте еще раз (код ошибки: ${error['code']})`));
    }

    return null;
  }
};
