import React, { createContext, useState, useRef, useEffect } from 'react';


export const TimerContext = createContext()


const TimerContextProvider = ({ children }) => {
  const [timer, setTimer] = useState(5)
  const [sessionLength, setSessionLength] = useState(1500)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)


  // console.log('PomodoroClock values', values)

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


  return (
    <TimerContext.Provider value={{
      timer, setTimer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, sessionLength, increaseSessionTime, decreaseSessionTime
    }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerContextProvider