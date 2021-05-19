import React from 'react';

import '../styles/globals.css';

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
function MyApp({ Component, pageProps }) {
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return <Component {...pageProps} />;
}

export default MyApp;
