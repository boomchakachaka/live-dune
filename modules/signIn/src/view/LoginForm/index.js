
import { reduxForm } from 'redux-form';

import Component from './Component';


const validate = values => {
  const errors = {};

  if ( ! values['email']) {
    errors['email'] = 'Введите email';
  } else {
    // if ( ! validation.email(values['email'])) {
    //   errors['email'] = 'Неверный Email';
    // }
  }
  if ( ! values['password']) {
    errors['password'] = 'Введите пароль';
  }
  return errors;
};

export default reduxForm ({
  form: 'sign-in',
  validate,
})(Component);
