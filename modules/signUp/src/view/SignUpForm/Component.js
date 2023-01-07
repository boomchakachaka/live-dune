
import { InputField, Button, Header, Text } from '@libs/kit';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'clsx';
import styles from './default.module.scss';


function SignUpForm({ handleSubmit, valid }) {
  const [isActive, setActive] = React.useState(false);

  function handleShowField() {
    setActive( ! isActive);
  }

  return (
    <div className={styles['wrapper']}>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <div className={styles['header']}>
          <Header level={1}>Регистрация</Header>
          <span className={styles['description']}><Text type={'description'}>Зарегистрируйся и получи доступ к аналитике аккаунтов. </Text></span>
        </div>
        <div className={styles['social']}>
          <div className={cn(styles['social__link'], styles['fb'])}>Войти через Facebook</div>
          <div className={cn(styles['social__link'], styles['google'])}>Войти через Google</div>
        </div>
        <span className={styles['text']}><Text type={'description'}>или</Text></span>
        <div className={styles['content']}>
          <div className={styles['row']}>
            <InputField
              name={'name'}
              placeholder={'Имя'}
            />
          </div>
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
          {isActive && (
            <div className={styles['row']}>
              <InputField
                name={'promocode'}
                placeholder={'Промокод'}
              />
            </div>
          )}
        </div>
        <div className={styles['controls']}>
          { ! isActive && <p className={styles['link']} onClick={() => handleShowField()}>У меня есть промокод</p>}
          <Button
            type={'submit'}
            mode={'primary'}
            disabled={ ! valid }
          >Создать аккаунт</Button>
          <span className={styles['offer']}>Создавая аккаунт, я согласен с <p className={styles['link']}>условиями оферты</p></span>
        </div>
      </form>
    </div>
  );
}

SignUpForm.propTypes = {
  disabled: PropTypes.bool,
};

SignUpForm.defaultProps = {
  disabled: false,
};

export default SignUpForm;
