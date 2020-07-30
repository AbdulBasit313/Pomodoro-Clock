import React from 'react'

import { formatTime } from '../utils'
import useBreak from '../hooks/useBreak'

const Break = () => {
  const { breakTime, startBreak, increaseBreakTime, decreaseBreakTime } = useBreak(300)

  return (
    <div>
      <p style={{ margin: '40px  auto 0px auto' }}>{formatTime(breakTime)}</p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 30, height: 30, alignSelf: 'center' }} onClick={increaseBreakTime}>
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
        </div>
        <p style={{ color: '#d9edfe', fontSize: 20 }}>Break Length</p>
        <div style={{ width: 30, height: 30, alignSelf: 'center' }} onClick={decreaseBreakTime}>
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
        </div>
      </div>
    </div>
  )
}


export default Break



// <div>
//   <div>
//     <p>{formatTime(breakTime)}</p>
//     <h3 style={{ color: '#d9edfe' }}>Break length</h3>
//     <div style={{ display: 'flex' }}>
//       <button onClick={increaseBreakTime} disabled={breakTime >= 3600}>
//         Increment
//       </button>
//       <button onClick={decreaseBreakTime} disabled={breakTime <= 0}>
//         Decrement
//       </button>
//     </div>
//   </div>
// </div>