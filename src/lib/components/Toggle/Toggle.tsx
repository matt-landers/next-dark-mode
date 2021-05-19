import React, { useState } from 'react';
import { useNextLayoutEffect } from '../../utils';

import styles from './Toggle.module.scss';

const Toggle: React.FC = () => {
  const [theme, setTheme] = useState('dark');

  useNextLayoutEffect(() => {
    const html = document.querySelector('html');
    if (!html) {
      return;
    }
    html.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <label className={styles.switch} htmlFor="themeToggle">
      <input
        id="themeToggle"
        type="checkbox"
        checked={theme && theme === 'light'}
        onChange={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      />
      <span className={[styles.slider, styles.round].join(' ')} />
    </label>
  );
};

export default Toggle;
