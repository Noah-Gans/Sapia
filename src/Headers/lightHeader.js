import React from 'react';
import { Link } from 'react-router-dom'; // This import is necessary for using <Link>
import logo from '../Logos/LogoLightLogo.png'; // Replace with the path to your logo image
import DropdownMenu from './DropdownMenuLight.js'; // Assuming DropdownMenu.js does not need .js extensionimport './HeaderComponent.css'; // Importing CSS for styling
import styles from './lightHeader.module.css'; // Updated import

function HeaderComponent() {
  // State and logic for the dropdown could be managed here if needed

  return (
    <header className={styles.header}> 
        <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} /> 
      </Link>
      <DropdownMenu />
    </header>
  );
}

export default HeaderComponent;
