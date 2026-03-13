import { Link, useLocation } from 'react-router';
import { Layers } from 'lucide-react';
import Frame163151 from '../../../imports/Frame163151';
import styles from './Header.module.css';

export function Header() {
  const location = useLocation();
  
  const navLinks = [
    { label: 'Dərsliklər', href: '/derslikler' },
    { label: 'İmtahan mərkəzi', href: '/imtahan' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo - Sol tərəf */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <Frame163151 />
          </div>
        </Link>

        {/* Naviqasiya - Orta hissə */}
        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Proqram Təminatı düyməsi - Sağ tərəf */}
        <Link to="/programlar" className={styles.button}>
          <Layers className={styles.buttonIcon} />
          Proqram Təminatı
        </Link>
      </div>
    </header>
  );
}
