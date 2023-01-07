
import { reduxForm } from 'redux-form';

import Component from './Component';


const validate = values => {
  let errors = {};

  if ( ! values['email']) {
    errors['email'] = 'Обязательное поле';
  } else {
    // if ( ! validation.email(values['email'])) {
    //   errors['email'] = 'Неверный Email';
    // }
  }

  return errors;
};

export default reduxForm({
  form: 'reset-password',
  validate,
})(Component);
