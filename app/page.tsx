import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keeyan Land</title>
        <meta name="description" content="Welcome to Keeyan Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Keeyan Land</h1>
        <div className={styles.gamePlaceholder}>
          {/* Placeholder for the game */}
          <p>Game will be here</p>
        </div>
      </main>
    </div>
  );
}