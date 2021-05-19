import Head from 'next/head';
import React from 'react';
import { Nav } from '../Nav';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js Dark Mode Example</title>
        <meta name="description" content="Example of dark mode in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
