import React, { useContext } from 'react';

import { formatTime } from '../utils';
import { TimerContext } from '../context/TimerContext';


const Session = () => {
  const { sessionLength, increaseSessionTime, decreaseSessionTime } = useContext(TimerContext)

  return (
    <div>
      <p style={{ margin: '40px  auto 0px auto' }}>{formatTime(sessionLength)}</p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 30, height: 30, alignSelf: 'center' }} onClick={increaseSessionTime}>

          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
        </div>

        <p style={{ color: '#d9edfe', fontSize: 20 }}>Session Length</p>

        <div style={{ width: 30, height: 30, alignSelf: 'center' }} onClick={decreaseSessionTime}>

          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>

        </div>
      </div>
    </div>
  )
}


export default Session


{/* <div style={{ display: 'flex' }}>
        <button
          onClick={increaseSessionTime} disabled={isActive || sessionLength >= 3600}
        >
          Increment
        </button>
        <button
          onClick={decreaseSessionTime} disabled={isActive || sessionLength <= 0}
        >
          Decrement
        </button>
      </div> */}