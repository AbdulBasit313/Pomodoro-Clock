import React from 'react';

import Break from './Break';
import ProgressBar from './ProgressBar';
import useTimer from '../hooks/useTimer';
import useBreak from '../hooks/useBreak';
import { formatTime } from '../utils';


const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, increaseSessionTime, decreaseSessionTime } = useTimer(10)
  const { breakTime, startBreak } = useBreak(300)

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h1>React Pomodoro</h1>
        <ProgressBar
          progress={timer}
          breakTime={breakTime}
          startBreak={startBreak}
          size={250}
          strokeWidth={10}
          circleOneStroke='#d9edfe'
          circleTwoStroke='#5392D5'
        />
        <div>
          <div>
            {
              !isActive && !isPaused ?
                <button onClick={handleStart}>Start</button>
                : (
                  isPaused ? <button onClick={handlePause}>Pause</button> :
                    <button onClick={handleResume}>Resume</button>
                )
            }
            <button onClick={handleReset} disabled={!isActive}>Reset</button>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ color: '#d9edfe' }}>Session length</h2>
        <p style={timer <= 60 ? { color: 'red' } : null}> {formatTime(timer)}</p>
        <button
          onClick={increaseSessionTime} disabled={isActive || timer >= 3600}
        >
          Increment
        </button>
        <button
          onClick={decreaseSessionTime} disabled={isActive || timer <= 0}
        >
          Decrement
        </button>
      </div>
      <Break />
    </div>
  );
}


export default Timer;
