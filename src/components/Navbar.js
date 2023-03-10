import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from 'src/css/Navbar.module.css';
import logo from '../image/logo.png';

const links = [
  {
    to: '/',
    text: 'Rockets',
  },
  {
    to: '/missions',
    text: 'Missions',
  },
  {
    to: '/my-profile',
    text: 'My Profile',
  },
];

function Navbar() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.icondiv}>
        <img src={logo} alt="planet" className={styles.icon} />
        <span className={styles.navspan}>Space Travelers&apos; Hub</span>
      </NavLink>
      <nav>
        <ul className={styles.navItems}>
          {links.map((e) => (
            <NavLink
              key={e.to}
              to={e.to}
              className={({ isActive }) => cn(styles.link, isActive && styles.active)}
            >
              {e.text}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
