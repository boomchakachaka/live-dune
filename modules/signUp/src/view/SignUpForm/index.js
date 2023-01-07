
import { reduxForm } from 'redux-form';

import Component from './Component';


const validate = (values) => {
  const errors = {};

  if ( ! values['name']) {
    errors['name'] = 'Введите имя';
  }

  if ( ! values['email']) {
    errors['email'] = 'Введите email';
  } else {
    // if ( ! validation.email(values['email'])) {
    //   errors['email'] = 'Неверный email';
    // }
  }

  if ( ! values['password']) {
    errors['password'] = 'Введите пароль';
  }

  if ( ! values['promocode']) {
    errors['promocode'] = 'Введите промокод';
  }

  return errors;
};

export default reduxForm ({
  form: 'sign-up',
  validate,
})(Component);
