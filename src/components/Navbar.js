import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from 'src/css/Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <NavLink to="/">Space Travelers&apos; Hub</NavLink>
      <nav>
        <ul className={styles.navItems}>
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/my-profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
