import React from 'react';
import { Link } from 'react-router-dom';
import styles from './darkHeader.module.css';
import DropdownMenu from './DropdownMenuDark';
import logo from './../Logos/LogoLogoDark(2).png';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Logo" />
      </Link>
      <nav className={styles.navLinks}>
        <Link to="/services" className={styles.navLink}>Services</Link>
        <Link to="/solutions" className={styles.navLink}>Solutions</Link>
        <Link to="/services" className={styles.navLink}>About</Link>
        <Link to="/solutions" className={styles.navLink}>Plans</Link>
        <Link to="/solutions" className={styles.navLink}>Our Patients</Link>

      </nav>
      <div className={styles.dropdownMenu}>
        <DropdownMenu />
      </div>
    </header>
  );
}

export default Header;
