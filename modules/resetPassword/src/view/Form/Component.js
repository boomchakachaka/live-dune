
import { selectInProcess, selectIsSuccess } from '@modules/reset-password';

import { Button, InputField, Header, Text } from '@libs/kit';

import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import styles from './default.module.scss';


function ResetPasswordForm({ handleSubmit, valid, submitting }) {
  const inProcess = useSelector(selectInProcess);
  const isSuccess = useSelector(selectIsSuccess);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <span className={styles['header']}>
        <div className={styles['image']} />
        <Header level={2}>Восстановить пароль</Header>
        <span className={styles['description']}>
          <Text type={'description'}>Введите e-mail, на который регистрировались ранее</Text>
        </span>
      </span>
      <div className={styles['content']}>
        { isSuccess && <span className={styles['text']}>Успех</span> }
        <InputField
          placeholder={'E-mail'}
          name={'email'}
        />
      </div>
      <div className={styles['controls']}>
        <Button
          type={'submit'}
          mode={'primary'}
          inProcess={inProcess}
          disabled={ ! valid || submitting}
        >Отправить</Button>
        <Link className={styles['back']} to={'/live-dune/sign-in'}>Отменить</Link>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
