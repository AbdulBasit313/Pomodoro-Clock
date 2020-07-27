import React, { useState } from 'react';

import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils';
import Break from './Break';
import ProgressBar from './ProgressBar';


const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, increaseSessionTime, decreaseSessionTime } = useTimer(90)

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>React Pomodoro</h3>
        <ProgressBar
          progress={timer}
          size={250}
          strokeWidth={10}
          circleOneStroke='#d9edfe'
          circleTwoStroke='lightBlue'
        />
        <div>
          <p style={timer <= 60 ? { color: 'red' } : { color: 'green' }}>{formatTime(timer)}</p>
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
