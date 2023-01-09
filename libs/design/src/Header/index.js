
import { Logotype} from '@libs/kit';

import React from 'react';
import { useLocation } from 'react-router-dom';

import SignInControl from './signInControl';
import SignUpControl from './signUpControl';
import ConfirmEmailControl from './confirmEmailControl';

import styles from './default.module.scss';


function FactoryControls({ url }) {
  switch (url) {
    case 'sign-in': return <SignInControl />;
    case 'sign-up': return <SignUpControl />;
    case 'confirm-email': return <ConfirmEmailControl />;
    default: return <div className={styles['right']} />;
  }
}

function Header() {
  const location = useLocation();
  const url = location['pathname'].split('/')[1];

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['left']}>
          <Logotype />
        </div>
      { <FactoryControls url={url} /> }
      </div>
    </div>
  );
}

export default React.memo(Header);
