
import { Button, Text } from '@libs/kit';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './default.module.scss';


export default function SignUpControl() {
  const navigate = useNavigate();

  return (
    <div className={styles['right']}>
      <span className={styles['text']}><Text>Уже есть аккаунт?</Text></span>
      <div className={styles['control']}>
        <Button size={'small'} onClick={() => navigate(process.env['PUBLIC_URL'] + '/sign-in')}>Войти</Button>
      </div>
    </div>
  )
}