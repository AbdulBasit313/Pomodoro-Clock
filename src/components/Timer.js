import React from 'react';

import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils';


const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, increaseSessionTime, decreaseSessionTime } = useTimer(1500)

  return (
    <div>
      <div className="app">
        <h3>React Stopwatch</h3>
        <div className='stopwatch-card'>
          <p>{formatTime(timer)}</p>
          <div className='buttons'>
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
        <button onClick={increaseSessionTime} disabled={isActive}>Increment</button>
        <button onClick={decreaseSessionTime} disabled={isActive}>Decrement</button>
      </div>
    </div>
  );
}


export default Timer;
