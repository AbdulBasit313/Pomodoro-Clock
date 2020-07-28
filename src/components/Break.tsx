import React, { useEffect } from 'react'

import { formatTime } from '../utils'
import useBreak from '../hooks/useBreak'

const Break = () => {
  const { breakTime, startBreak, increaseBreakTime, decreaseBreakTime } = useBreak(300)

  // useEffect(() => {
  //   if (breakTime <= 0) {
  //     // @ts-ignore
  //     clearInterval(increment.current)
  //     setBreakTime(0)
  //   }
  // }, [breakTime])

  return (
    <div>
      <div>
        <h2 style={{ color: '#d9edfe' }}>Break length</h2>
        <p>{formatTime(breakTime)}</p>
        <button onClick={startBreak}>Start Break</button>
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