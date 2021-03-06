import React, { useEffect, useState, useRef, FC } from 'react';
import PropTypes from 'prop-types';

import { formatTime } from '../utils';

interface ProgressbarProps {
  size: number
  progress: number
  strokeWidth: number
  circleOneStroke: string
  circleTwoStroke: string
  currentTimer: string
  sessionLength: number
  breakLength: number
}

const ProgressBar: FC<ProgressbarProps> = (props) => {
  const [offset, setOffset] = useState(0);
  const [progressValue, setProgressValue] = useState(0)
  const circleRef = useRef(null);

  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
    currentTimer,
    sessionLength,
    breakLength
  } = props;


  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    setProgressValue(100 / progress)
  }, [progressValue, currentTimer, sessionLength, breakLength])


  useEffect(() => {
    const progressOffset = ((100 - (progress * progressValue)) / 100) * circumference;
    setOffset(progressOffset);
    // @ts-ignore
    circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';

  }, [setOffset, progress, circumference, offset]);


  return (
    <>
      <svg
        className="svg"
        width={size}
        height={size}
      >
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset} // full 0 // 753.9822368615503
        />
        <text
          x={`${center}`}
          y={`${center}`}
          className={progress <= 60 ? 'color-red' : 'svg-circle-text'}>
          {formatTime(progress)}
        </text>
      </svg>
    </>
  );
}

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired
}

export default ProgressBar;