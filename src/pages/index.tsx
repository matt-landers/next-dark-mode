import React from 'react';
import { Layout } from '../lib/components';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://wpengine.com/atlas">Atlas</a>
          </h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
