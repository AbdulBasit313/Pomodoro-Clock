import { useState, useRef, useEffect, useContext } from 'react';

import { TimerContext } from '../context/TimerContext';


const useTimer = (initialState = 1500) => {
  const values = useContext(TimerContext)
  const [timer, setTimer] = useState(initialState)
  const [sessionLength, setSessionLength] = useState(1500)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)


  console.log('PomodoroClock values', values)

  const decrementTimer = () => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    decrementTimer()
  }

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(increment.current)
      setTimer(0)
    }
  }, [timer])

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    decrementTimer()
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const increaseSessionTime = () => {
    setSessionLength((sessionLength) => sessionLength + 60)
    setTimer((timer) => timer + 60)
  }

  const decreaseSessionTime = () => {
    setSessionLength((sessionLength) => sessionLength - 60)
    setTimer((timer) => timer - 60)
  }

  return {
    timer,
    sessionLength,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    increaseSessionTime,
    decreaseSessionTime
  }
}

export default useTimer