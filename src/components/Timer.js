import React, { useContext, useEffect, useRef } from 'react';

import ProgressBar from './ProgressBar';
import { TimerContext } from '../context/TimerContext';
import useBreak from '../hooks/useBreak';
import beep from '../assets/audio/beep.wav'


const Timer = () => {
  const {
    timer, setTimer, handleStart, isActive, isPaused, handlePause, handleResume, handleReset
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
          setTimer={setTimer}
          handleReset={handleReset}
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {
            !isActive && !isPaused ?
              <div style={{ width: 20, height: 20 }} onClick={handleStart}>
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              :
              <div style={{ width: 20, height: 20 }} onClick={handleResume}>
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
          }
          <div style={{ width: 20, height: 20 }} onClick={handleReset}>
            <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </div>
        </div>
      </div>
    </>
  );
}


export default Timer;


{/* <button onClick={handleReset} disabled={!isActive}>Reset</button> */ }
{/* {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          } */}

{/* <p style={timer <= 60 ? { color: 'red' } : null}> {formatTime(timer)}</p> */ }
// src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'