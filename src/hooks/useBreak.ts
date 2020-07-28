import { useState, useRef, useEffect } from 'react';


const useBreak = (initialState = 300) => {
  const [breakTime, setBreakTime] = useState(initialState)
  const increment = useRef(null)

  const decrementBreakTimer = () => {
    // @ts-ignore
    increment.current = setInterval(() => {
      setBreakTime((breakTime) => breakTime - 1)
    }, 1000)
  }

  const startBreak = () => {
    decrementBreakTimer()
  }

  const increaseBreakTime = () => {
    setBreakTime((breakTime) => breakTime + 60)
  }

  const decreaseBreakTime = () => {
    setBreakTime((breakTime) => breakTime - 60)
  }

  useEffect(() => {
    if (breakTime <= 0) {
      // @ts-ignore
      clearInterval(increment.current)
      setBreakTime(0)
    }
  }, [breakTime])

  return {
    breakTime,
    startBreak,
    increaseBreakTime,
    decreaseBreakTime
  }
}

export default useBreak