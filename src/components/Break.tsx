import React, { useState, useEffect } from 'react'

import { formatTime } from '../utils'

const Break = () => {
  const [breakTime, setBreakTime] = useState(300)

  const increaseBreakTime = () => {
    setBreakTime((breakTime) => breakTime + 60)
  }

  const decreaseBreakTime = () => {
    setBreakTime((breakTime) => breakTime - 60)
  }

  useEffect(() => {
    if (breakTime <= 0) {
      // clearInterval(increment.current)
      setBreakTime(0)
    }
  }, [breakTime])

  return (
    <div>
      <p>{formatTime(breakTime)}</p>
      <div>
        <h2 style={{ color: '#d9edfe' }}>Break length</h2>
        <button
          onClick={increaseBreakTime} disabled={breakTime >= 3600}
        >
          Increment
        </button>
        <button
          onClick={decreaseBreakTime} disabled={breakTime <= 0}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Break