import React from 'react';

import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils';
import Break from './Break';


const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, increaseSessionTime, decreaseSessionTime } = useTimer(10)

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h3>React Stopwatch</h3>
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
        <h2>Session length</h2>
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
