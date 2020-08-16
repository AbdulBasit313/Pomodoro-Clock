import React, { useEffect } from 'react';

import SetTimer from './SetTimer';
import { formatTime } from '../utils';

import beep from '../assets/audio/beep.wav'
import { useTimer } from '../context/TimerContext';


const PomodoroClock = () => {
  const {
    currentTimer,
    setCurrentTimer,
    clockTimer,
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
      // setClockTimer(currentTimer === 'Session' ? breakLength : sessionLength * 60)
      setClockTimer(currentTimer === 'Session' ? breakLength * 60 : sessionLength * 60)
    }
  }, [clockTimer])

  // useEffect(() => {
  //   if (clockTimer === 0) {
  //     setTimeout(() => {
  //       // @ts-ignore
  //       // clearInterval(increment.current)
  //       setCurrentTimer(currentTimer === 'Session' ? 'Break' : 'Session')
  //       setClockTimer(currentTimer === 'Session' ? breakLength * 60 : sessionLength * 60)
  //     }, 1000)
  //   }
  // }, [clockTimer])

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
        <p id='time-left' style={clockTimer <= 60 ? { color: '#CD5C5C' } : { color: '#00FA9A' }}>{formatTime(clockTimer)}</p>
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


// return (
  //   <div className='center'>
  //     <h1>React Pomodoro</h1>
  //     <div>
  //       <Timer />
  //       <div style={{ display: 'flex', justifyContent: 'center' }}>
  //         <Session />
  //         <Break />
  //       </div>
  //     </div>
  //   </div>
  // )