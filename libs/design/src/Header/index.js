
import { Button, Logotype, Text } from '@libs/kit';

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './default.module.scss';


function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const curr = location['pathname'].split('/')[1];

  function handleChangeRoute() {
    navigate(`/sign-in`);
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['left']}>
          <Logotype />
        </div>
        <div className={styles['right']}>
          <span className={styles['text']}><Text>У вас нет аккаунта?</Text></span>
          <div className={styles['control']}>
            <Button size={'small'} onClick={handleChangeRoute}>Войти</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
