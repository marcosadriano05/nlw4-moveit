import { useState, useEffect, useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Countdown.module.css';

let countdownTimeOut: NodeJS.Timeout;

export function Countdown() {
  const contextData = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1*60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time/60);
  const seconds = time%60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(0.1*60);
  }

  useEffect(() => {
    countdownTimeOut = setTimeout(() => {
      if(isActive && time > 0) {
        setTime(time-1);
      } else if(isActive && time === 0) {
        setHasFinished(true);
        setIsActive(false);
      }
    }, 1000);
  }, [isActive, time]);

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
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}  
            >
              Iniciar contagem
            </button>
          )}
        </>
      )}
    </div>
  );
}