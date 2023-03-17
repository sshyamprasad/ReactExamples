import React, { Fragment, useRef, useState } from 'react';

function Solution() {
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [displayTime, setDisplayTime] = useState('00:00')
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsRunning(true);
    let time = (+minutes)*60 + (+seconds);
    setTime(time)
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => +prevTime + 1);
      setDisplayTime(secondsToHhMm(time));
      console.log(secondsToHhMm(time));
    }, 1000);

  };

  const handlePause = () => {
    setIsRunning((prevValue) => !prevValue);
    
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const updateMinutes = (e) => {
    setMinutes(e.target.value);
  } 

  const updateSeconds = (e) => {
    setSeconds(e.target.value);
  } 

  function secondsToHhMm(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    console.log(`${hoursStr}:${minutesStr}`)
    return `${hoursStr}:${minutesStr}`;
  }

  return (
    <Fragment>
      <label>
        <input type="number" value={minutes} onChange={updateMinutes}/>
        Minutes
      </label>
      <label>
        <input type="number" value={seconds} onChange={updateSeconds}/>
        Seconds
      </label>

      <button onClick={handleStart}>START</button>
      <button onClick={handlePause}>PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>

      <h1 data-testid="running-clock">{displayTime}</h1>
    </Fragment>
  );
}

export default Solution;
