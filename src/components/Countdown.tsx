import { useContext } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCountdown, 
    startCountdown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button 
          disabled
          type="button" 
          className={styles.countdownButton}  
        >
          Ciclo encerrado
          <span className={styles.checkCircle}>
            <i className="fas fa-check" />
          </span>
      </button>
      ) : (
        <>
          {isActive ? (
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}  
            >
              Abandonar ciclo
              <span className={styles.xIcon}>
                <i className="fas fa-times"></i>
              </span>
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}  
            >
              Iniciar um ciclo
              <span className={styles.playArrow}>
                <i className="fas fa-play"></i>
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
}