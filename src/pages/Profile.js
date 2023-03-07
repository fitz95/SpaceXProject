import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'src/css/Profile.module.css';
import { selectReservedMissions } from 'src/redux/missionsSlice';
import { selectReservedRockets } from 'src/redux/rocketsSlice';

function Profile() {
  const reservedMissions = useSelector(selectReservedMissions);
  const reservedRockets = useSelector(selectReservedRockets);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2 className={styles.title}>My Missions</h2>
        <ul className={styles.list}>
          {reservedMissions.map((e) => (
            <li key={e.mission_id} className={styles.listItem}>
              {e.mission_name}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>My Rockets</h2>
        <ul className={styles.list}>
          {reservedRockets.map((e) => (
            <li key={e.rocket_id} className={styles.listItem}>
              {e.rocket_name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Profile;
