import { Link, useRouteError, isRouteErrorResponse } from 'react-router';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { AlertTriangle } from 'lucide-react';
import styles from './ErrorBoundary.module.css';

export function ErrorBoundary() {
  const error = useRouteError();
  
  let errorMessage: string;
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = 'Naməlum xəta baş verdi';
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <AlertTriangle className={styles.icon} />
          </div>
          
          {errorStatus && (
            <h1 className={styles.status}>
              {errorStatus}
            </h1>
          )}
          
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Xəta baş verdi
            </h2>
            <p className={styles.message}>
              {errorMessage}
            </p>
          </div>

          <Link to="/" className={styles.button}>
            Ana səhifəyə qayıt
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
