import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { ChallengesContext } from './ChallengesContext';

interface CountdownContextProps {
  children: ReactNode
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeOut: NodeJS.Timeout;

export function CountdownContextProvider({ children }: CountdownContextProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25*60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time/60);
  const seconds = time%60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(25*60);
    setHasFinished(false);
  }

  useEffect(() => {
    countdownTimeOut = setTimeout(() => {
      if(isActive && time > 0) {
        setTime(time-1);
      } else if(isActive && time === 0) {
        setHasFinished(true);
        setIsActive(false);
        startNewChallenge();
      }
    }, 1000);
  }, [isActive, time]);

  return(
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}