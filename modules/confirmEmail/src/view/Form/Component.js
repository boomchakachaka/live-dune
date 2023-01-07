
import { selectInProcess } from '@modules/confirm-email';

import { Button, Header, Text } from '@libs/kit';

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './default.module.scss';


function ConfirmEmailForm({ handleSubmit, valid, submitting }) {
  // const inProcess = useSelector(selectInProcess);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={1}>Подтвердите ваш e-mail</Header>
        <div className={styles['description']}>
          <Text type={'description'}>Игорь, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа. </Text>
        </div>
      </div>
      <div className={styles['controls']}>
        <Button
          type='submit'
          mode='primary'
          // inProcess={inProcess}
          disabled={ ! valid || submitting}
        >Перейти к почте </Button>
        <Link className={styles['link']} to={'/sign-up'}>Мне не пришло письмо</Link>
      </div>
    </form>
  );
}

export default ConfirmEmailForm;
