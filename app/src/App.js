
import { Header } from '@libs/design';

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

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
          <Route path={process.env['PUBLIC_URL'] } element={<Navigate replace to={process.env['PUBLIC_URL'] + '/sign-in'} />} />
          <Route path={process.env['PUBLIC_URL'] + '/sign-in'} element={<SignInPage />} />
          <Route path={process.env['PUBLIC_URL'] + '/sign-up'} element={<SignUpPage />}/>
          <Route path={process.env['PUBLIC_URL'] + '/reset-password'} element={<ResetPasswordPage />} />
          <Route path={process.env['PUBLIC_URL'] + '/confirm-email'} element={<ConfirmEmailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
