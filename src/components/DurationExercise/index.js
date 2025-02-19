import React, { useState, useEffect } from "react";
import "../../App.css";

export default function DurationExercise({ name }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (milliseconds) => {
    const minutes = String(Math.floor(milliseconds / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((milliseconds % 60000) / 1000)).padStart(2, "0");
    const ms = String((milliseconds % 1000) / 10).padStart(2, "0");
    return `${minutes}:${seconds}:${ms}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Duration: {formatTime(time)}</p>
      <button className="exercise-button" onClick={() => setIsRunning(true)}>Start</button>
      <button className="reset-button" onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
    </div>
  );
}
