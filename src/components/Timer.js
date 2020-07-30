import React, { useContext, useEffect, useRef } from 'react';

import ProgressBar from './ProgressBar';
import { TimerContext } from '../context/TimerContext';
import useBreak from '../hooks/useBreak';
import beep from '../assets/audio/beep.wav'


const Timer = () => {
  const {
    timer, handleStart, isActive, isPaused, handlePause, handleResume, handleReset
  } = useContext(TimerContext)
  const { breakTime, startBreak } = useBreak(300)
  const audio = useRef(null)

  useEffect(() => {
    if (timer === 60) {
      audio.current.play()
    }
  }, [timer])

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <ProgressBar
          progress={timer}
          breakTime={breakTime}
          startBreak={startBreak}
          size={250}
          strokeWidth={10}
          circleOneStroke='#d9edfe'
          circleTwoStroke='#5392D5'
        />
        <audio
          id='beep'
          ref={audio}
          src={beep}
        />
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
    </>
  );
}


export default Timer;

{/* <p style={timer <= 60 ? { color: 'red' } : null}> {formatTime(timer)}</p> */ }
// src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'