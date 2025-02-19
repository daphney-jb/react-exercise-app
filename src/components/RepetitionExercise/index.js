import React, { useState } from "react";
import "../../App.css";

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <p>Repetitions: {count}</p>
      <button className="exercise-button" onClick={() => setCount(count + 1)}>Increase</button>
      <button className="reset-button" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
