
import { reduxForm } from 'redux-form';

import Component from './Component';


function validateEmail(value = '') {
  const regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regExp.test(String(value).toLowerCase());
};

const validate = values => {
  let errors = {};

  if ( ! values['email']) {
    errors['email'] = 'Обязательное поле';
  }
  else if ( ! validateEmail(values['email'])) {
    errors['email'] = 'Неверный Email';
  }
  else if (values['email'] !== 'example@example.com') {
    errors['email'] = 'Неверный email';
  }

  return errors;
};

export default reduxForm({
  form: 'reset-password',
  validate,
})(Component);
