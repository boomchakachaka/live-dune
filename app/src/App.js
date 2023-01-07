
import { Header } from '@libs/design';

import React from 'react';
import { Router, Route, Routes, Navigate } from 'react-router-dom';

import SignInPage from '@modules/sign-in';
import SignUpPage from '@modules/sign-up';
import ResetPasswordPage from '@modules/reset-password';
import ConfirmEmailPage from '@modules/confirm-email';

import styles from './default.module.scss';

function App() {
  return (
    <div className={styles['wrapper']}>
      <header className={styles['header']}><Header /></header>
      <div className={styles['content']}>
        <Routes>
          <Route path={'/'} element={<Navigate replace to={'/sign-in'} />} />
          <Route path={'/sign-in'} element={<SignInPage />} />
          <Route path={'/sign-up'} element={<SignUpPage />}/>
          <Route path={'/reset-password'} element={<ResetPasswordPage />} />
          <Route path={'/confirm-email'} element={<ConfirmEmailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
