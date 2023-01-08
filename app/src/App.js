
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
          <Route path={'/live-dune/sign-in'} element={<SignInPage />} />
          <Route path={'/live-dune/sign-up'} element={<SignUpPage />}/>
          <Route path={'/live-dune/reset-password'} element={<ResetPasswordPage />} />
          <Route path={'/live-dune/confirm-email'} element={<ConfirmEmailPage />} />
          <Route path={'/'} element={<Navigate replace to={'/live-dune/sign-in'} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
