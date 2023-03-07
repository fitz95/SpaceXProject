import React from 'react';
import styles from 'src/css/Profile.module.css';

function Profile() {
  return (
    <div className={styles.profileDiv}>
      <div>
        <table>
          <tr>
            <th className={styles.tableContent}>Missions</th>
          </tr>
          <tr>
            <td className={styles.tableContent}>Alfreds Futterkiste</td>
          </tr>
        </table>
      </div>
      <div>
        <table>
          <tr>
            <th>Rockets</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Profile;
