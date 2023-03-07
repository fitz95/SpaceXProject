import React from 'react';
import styles from '../css/RocketUi.module.css';

function RocketUi({
  // eslint-disable-next-line react/prop-types
  name, desc, picture, reserved,
}) {
  return (
    <div className={styles.rocketflex}>
      <div className={styles.imgdiv}>
        <img src={picture} alt="Rocket" className={styles.img} />
      </div>
      {!reserved && (
        <div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.desc}>{desc}</p>
          <button type="button" className={styles.reservebtn}>
            Reserve Rocket
          </button>
        </div>
      )}
      {reserved && (
        <div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.desc}>
            <span className={styles.reservespan}>reserved</span>
            {desc}
          </p>
          <button type="button" className={styles.cancelbtn}>
            Cancel Reservation
          </button>
        </div>
      )}
    </div>
  );
}

export default RocketUi;
