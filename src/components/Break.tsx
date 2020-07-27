import React, { useState } from 'react'

import { formatTime } from '../utils'

const Break = () => {
  const [breakTime, setBreakTime] = useState(300)

  const increaseBreakTime = () => {
    setBreakTime((breakTime) => breakTime + 60)
  }

  const decreaseBreakTime = () => {
    setBreakTime((breakTime) => breakTime - 60)
  }

  return (
    <div>
      <h1>Break</h1>
      <p>{formatTime(breakTime)}</p>
      <div>
        <h2>Break length</h2>
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