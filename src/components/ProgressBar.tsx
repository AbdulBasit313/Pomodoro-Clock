import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// import './ProgressBar.css';
// let num = 100 / progress

const ProgressBar = (props: any) => {
  const [offset, setOffset] = useState(0);
  const [progressValue, setProgressValue] = useState(0)
  const circleRef = useRef(null);
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  console.log('circumference', circumference)

  useEffect(() => {
    setProgressValue(100 / progress)
  }, [])

  useEffect(() => {
    const progressOffset = ((100 - (progress * progressValue)) / 100) * circumference;
    setOffset(progressOffset);
    // @ts-ignore
    circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';

  }, [setOffset, progress, circumference, offset]);

  console.log('offset', offset)

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
          // strokeDasharray={753.9822368615503}
          // strokeDashoffset={offset}
          strokeDashoffset={offset} // full 0 // 753.9822368615503
        />
        <text
          x={`${center}`}
          y={`${center}`}
          className="svg-circle-text">
          {progress}%
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