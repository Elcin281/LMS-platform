import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © 2025 Araz Supermarket — Bütün hüquqlar qorunur
        </p>
        <div className={styles.badge}>
          Konfidensial
        </div>
      </div>
    </footer>
  );
}
