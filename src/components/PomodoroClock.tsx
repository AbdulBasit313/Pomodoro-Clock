import React, { useEffect } from 'react';

import ProgressBar from './ProgressBar';
import SetTimer from './SetTimer';
import { useTimer } from '../context/TimerContext';

const beep = require('../assets/audio/beep.wav')

const PomodoroClock = () => {
  const {
    currentTimer,
    setCurrentTimer,
    clockTimer,
    // @ts-ignore
    setClockTimer,
    sessionLength,
    breakLength,
    audio,
    isActive,
    handleStart,
    handlePause,
    handleReset,
    increaseSessionTime,
    decreaseSessionTime,
    increaseBreakTime,
    decreaseBreakTime
  } = useTimer()

  useEffect(() => {
    if (clockTimer === 0) {
      // @ts-ignore
      // clearInterval(increment.current)
      setCurrentTimer(currentTimer === 'Session' ? 'Break' : 'Session')
      setClockTimer(currentTimer === 'Session' ? breakLength * 60 : sessionLength * 60)
    }
  }, [clockTimer])


  useEffect(() => {
    if (clockTimer === 0) {
      // @ts-ignore
      audio.current.play()
    }
  }, [clockTimer])

  return (
    <div>
      <div className='timer'>
        <audio
          id='beep'
          ref={audio}
          src={beep}
        />
        <p id='timer-label'>{currentTimer}</p>
        <ProgressBar
          progress={clockTimer}
          size={200}
          strokeWidth={10}
          circleOneStroke='#1B2934'
          circleTwoStroke='#7ea9e1'
          currentTimer={currentTimer}
          sessionLength={sessionLength}
          breakLength={breakLength}
        />
        {/* <p id='time-left' style={clockTimer <= 60 ? { color: '#CD5C5C' } : { color: '#00FA9A' }}>{formatTime(clockTimer)}</p> */}
        <div className='handler'>
          <button id='start_stop' onClick={!isActive ? handleStart : handlePause}>
            {!isActive ? 'Start' : 'pause'}
          </button>
          <button id='reset' onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div>
        <div className='sessions'>
          <SetTimer
            timer={sessionLength} title='Session'
            increaseTime={increaseSessionTime} decreaseTime={decreaseSessionTime}
          />
          <SetTimer
            timer={breakLength} title='Break'
            increaseTime={increaseBreakTime} decreaseTime={decreaseBreakTime}
          />
        </div>
      </div>
    </div>
  )
}


export default PomodoroClock