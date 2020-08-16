import React from 'react';

import PomodoroClock from './components/PomodoroClock';
import TimerContextProvider from './context/TimerContext';
import './App.css';


function App() {
  return (
    <TimerContextProvider>
      <PomodoroClock />
    </TimerContextProvider>
  )
}

export default App;
