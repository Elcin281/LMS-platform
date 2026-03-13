import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from './Qaydalar.module.css';

export default function Qaydalar() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Qaydalar
        </h1>
        <p className={styles.description}>
          Bu səhifə hazırlanma mərhələsindədir.
        </p>
      </main>

      <Footer />
    </div>
  );
}
