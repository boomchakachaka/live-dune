
import { Text } from '@libs/kit';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './default.module.scss';


export default function ConfirmEmailControl() {
  const navigate = useNavigate();

  return (
    <div className={styles['right']}>
      <div className={styles['control']}>
        <Text type={'description'} onClick={() => navigate(process.env['PUBLIC_URL'] + '/sign-up')}>Выйти</Text>
      </div>
    </div>
  )
}