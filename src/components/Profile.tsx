import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/marcosadriano05.png" alt="Marcos Adriano" />
      <div>
        <strong>Marcos Adriano</strong>
        <p>
          <img src="icons/level.svg" />
          Level {level}
        </p>
      </div>
    </div>
  );
}