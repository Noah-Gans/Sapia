import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './DropdownMenuDark.module.css';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  return (
    <div className={styles.dropdown}>
      <button className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        &#9776; {/* Represents the three horizontal bars */}
      </button>
      {isOpen && (
        <div className={styles.menuContent}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/services" className={styles.link}>Services</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/howitworks" className={styles.link}>Membership</Link>
          <Link to="/faq" className={styles.link}>FAQ</Link>
        </div>
      )}
    </div>
  );
}


export default DropdownMenu;
