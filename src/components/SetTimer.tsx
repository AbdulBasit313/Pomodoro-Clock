import React, { FC } from 'react';

interface setTimerProps {
  timer: number
  title: string
  increaseTime: () => void
  decreaseTime: () => void
}


const SetTimer: FC<setTimerProps> = ({ timer, title, increaseTime, decreaseTime }) => {
  return (
    <div>
      <p id={`${title.toLowerCase()}-label`}>{title} Length</p>
      <button
        id={`${title.toLowerCase()}-increment`}
        onClick={increaseTime}
      >
        +
      </button>
      <small
        id={`${title.toLowerCase()}-length`}
      >
        {timer}
      </small>
      <button
        onClick={decreaseTime}
        id={`${title.toLowerCase()}-decrement`}
      >
        -
      </button>
    </div>
  )
}

export default SetTimer