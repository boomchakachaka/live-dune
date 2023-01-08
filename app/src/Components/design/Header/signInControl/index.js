
import { Button, Text } from '../../../kit';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './default.module.scss';


export default function SignInControl() {
  const navigate = useNavigate();

  return (
    <div className={styles['right']}>
      <span className={styles['text']}><Text>У вас нет аккаунта?</Text></span>
      <div className={styles['control']}>
        <Button size={'small'} onClick={() => navigate(process.env['PUBLIC_URL'] + '/sign-up')}>Регистрация</Button>
      </div>
    </div>
  )
}