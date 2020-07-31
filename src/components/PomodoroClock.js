import React from 'react';

import Break from './Break';
import Session from './Session';
import Timer from './Timer';


const PomodoroClock = () => {

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React Pomodoro</h1>
      <div>
        <Timer />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Session />
          <Break />
        </div>
      </div>
    </div>
  )
}


export default PomodoroClock