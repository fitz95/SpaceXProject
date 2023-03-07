import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'src/css/Navbar.module.css';
import logo from '../image/logo.png';

function Navbar() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.icondiv}>
        <img src={logo} alt="planet" className={styles.icon} />
        <span className={styles.navspan}>Space Travelers&apos; Hub</span>
      </NavLink>
      <nav>
        <ul className={styles.navItems}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Missions
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink
              to="/my-profile"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
