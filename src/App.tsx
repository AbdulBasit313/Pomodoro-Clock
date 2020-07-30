import React from 'react';

import PomodoroClock from './components/PomodoroClock';
import './App.css';
import TimerContextProvider from './context/TimerContext';

function App() {
  return (
    <TimerContextProvider>
      <PomodoroClock />
    </TimerContextProvider>
  )
}

export default App;
