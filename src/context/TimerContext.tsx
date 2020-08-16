import React, { createContext, useState, useRef, FC, useContext } from 'react';

type Props = {
  children: React.ReactNode,
}

interface TimerContextProps {
  currentTimer: string,
  setCurrentTimer: () => void,
  clockTimer: number,
  sessionLength: number,
  breakLength: number,
  isActive: boolean,
  handleStart: () => void,
  handlePause: () => void,
  handleReset: () => void,
  increaseSessionTime: () => void,
  decreaseSessionTime: () => void,
  increaseBreakTime: () => void,
  decreaseBreakTime: () => void
}

export const TimerContext = createContext<TimerContextProps>({
  currentTimer: '',
  setCurrentTimer: () => { },
  clockTimer: 0,
  // setClockTimer: () => { },
  sessionLength: 0,
  breakLength: 0,
  // audio: '',
  isActive: false,
  handleStart: () => { },
  handlePause: () => { },
  handleReset: () => { },
  increaseSessionTime: () => { },
  decreaseSessionTime: () => { },
  increaseBreakTime: () => { },
  decreaseBreakTime: () => { }
})

export const useTimer = () => useContext(TimerContext)

const TimerContextProvider: FC<Props> = ({ children }) => {
  const [currentTimer, setCurrentTimer] = useState('Session')
  const [clockTimer, setClockTimer] = useState(25 * 60)
  // const [clockTimer, setClockTimer] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [isActive, setIsActive] = useState(false)
  const increment = useRef(null)
  const audio = useRef(null)

  const decrementTimer = () => {
    // @ts-ignore
    increment.current = setInterval(() => {
      setClockTimer((clockTimer) => clockTimer - 1)
    }, 1000)
  }

  const handleStart = () => {
    // @ts-ignore
    clearInterval(increment.current)
    setIsActive(true)
    decrementTimer()
  }

  const handlePause = () => {
    // @ts-ignore
    clearInterval(increment.current)
    setIsActive(false)
  }

  const handleReset = () => {
    // @ts-ignore
    clearInterval(increment.current)
    setIsActive(false)
    setCurrentTimer('Session')
    setClockTimer(25 * 60)
    setSessionLength(25)
    setBreakLength(5)
    // @ts-ignore
    audio.current.pause()
    // @ts-ignore
    audio.current.currentTime = 0
  }

  const increaseSessionTime = () => {
    if (sessionLength <= 59) {
      if (!isActive) {
        setSessionLength((sessionLength) => sessionLength + 1)
        setClockTimer((clockTimer) => (clockTimer + 60))
      }
    }
  }

  const decreaseSessionTime = () => {
    if (sessionLength >= 2) {
      if (!isActive) {
        setSessionLength((sessionLength) => sessionLength - 1)
        setClockTimer((clockTimer) => clockTimer - 60)
      }
    }
  }

  const increaseBreakTime = () => {
    if (breakLength <= 59) {
      if (!isActive) {
        setBreakLength((breakLength) => breakLength + 1)
      }
    }
  }

  const decreaseBreakTime = () => {
    if (breakLength >= 2) {
      if (!isActive) {
        setBreakLength((breakLength) => breakLength - 1)
      }
    }
  }


  return (
    <TimerContext.Provider value={{
      currentTimer,
      // @ts-ignore
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
    }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerContextProvider