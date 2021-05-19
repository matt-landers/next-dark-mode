import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import { Toggle } from '../Toggle';

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo} href="/">
            <span>Dark Mode Example</span>
          </a>
        </Link>
        <div className={styles.toggle}>
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
