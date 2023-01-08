
import { InputField, Button, Header, Text } from '@libs/kit';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'clsx';
import styles from './default.module.scss';


function SignInForm({ handleSubmit, valid }) {
  return (
    <div className={styles['wrapper']}>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <div className={styles['header']}>
          <Header level={1}>Войти</Header>
          <span className={styles['description']}><Text type={'description'}>Добро пожаловать, рады видеть вас снова 👋</Text></span>
        </div>
        <div className={styles['social']}>
          <div className={cn(styles['social__link'], styles['fb'])}>Войти через Facebook</div>
          <div className={cn(styles['social__link'], styles['google'])}>Войти через Google</div>
        </div>
        <span className={styles['text']}><Text type={'description'}>или</Text></span>
        <div className={styles['content']}>
          <div className={styles['row']}>
            <InputField
              name={'email'}
              placeholder={'Email'}
            />
          </div>
          <div className={styles['row']}>
            <InputField
              type={'password'}
              name={'password'}
              placeholder={'Пароль'}
            />
          </div>
        </div>
        <div className={styles['controls']}>
          <Button
            type={'submit'}
            mode={'primary'}
            disabled={ ! valid }
          >Войти в аккаунт</Button>
          <Link to={process.env['PUBLIC_URL'] + '/reset-password'} className={styles['link']}>Забыли пароль?</Link>
        </div>
      </form>
    </div>
  );
}

SignInForm.propTypes = {
  disabled: PropTypes.bool,
};

SignInForm.defaultProps = {
  disabled: false,
};

export default SignInForm;
