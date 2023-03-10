import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from 'src/css/MissionsTable.module.css';
import { missionUpdated, selectMissions } from 'src/redux/missions/missionsSlice';

import MissionsBadge from './MissionsBadge';
import MissionsButton from './MissionsButton';

function MissionsTable() {
  const missions = useSelector(selectMissions);
  const dispatch = useDispatch();

  return (
    <table className={styles.table}>
      <colgroup>
        <col className={styles.col1} />
        <col className={styles.col2} />
        <col className={styles.col3} />
        <col className={styles.col4} />
      </colgroup>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id} className={styles.missionRow}>
            <td className={styles.name}>{mission.mission_name}</td>
            <td>
              <p className={styles.description}>{mission.description}</p>
            </td>
            <td className={styles.center}>
              <MissionsBadge isReserved={!!mission.reserved} />
            </td>
            <td className={styles.center}>
              <MissionsButton
                isReserved={!!mission.reserved}
                onClick={() => dispatch(missionUpdated(mission.mission_id))}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MissionsTable;
