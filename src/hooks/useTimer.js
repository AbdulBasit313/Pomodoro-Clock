import { useState, useRef, useEffect } from 'react';


const useTimer = (initialState = 1500) => {
  const [timer, setTimer] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

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
    console.log('handleStart calls ==>', timer)
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
    setTimer((timer) => timer + 60)
  }

  const decreaseSessionTime = () => {
    setTimer((timer) => timer - 60)
  }

  return {
    timer,
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