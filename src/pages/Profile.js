import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'src/css/Profile.module.css';
import { selectReservedMissions } from 'src/redux/missionsSlice';

function Profile() {
  const reservedMissions = useSelector(selectReservedMissions);

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
    </main>
  );
}

export default Profile;
