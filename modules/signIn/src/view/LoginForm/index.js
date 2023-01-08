
import { reduxForm } from 'redux-form';

import Component from './Component';


function validateEmail(value = '') {
  const regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regExp.test(String(value).toLowerCase());
};

const validate = values => {
  const errors = {};

  if ( ! values['email']) {
    errors['email'] = 'Введите email';
  }
  else if ( ! validateEmail(values['email'])) {
    errors['email'] = 'Неверный Email';
  }
  else if (values['email'] !== 'example@example.com') {
    errors['email'] = 'Неверный email';
  }

  if ( ! values['password']) {
    errors['password'] = 'Введите пароль';
  }
  else if (values['password'] !== 'password2021') {
    errors['password'] = 'Неверный пароль';
  }

  return errors;
};

export default reduxForm ({
  form: 'sign-in',
  validate,
})(Component);
