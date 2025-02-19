import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css";

const exercises = [
  { name: "Push-ups", type: "repetition" },
  { name: "Sit-ups", type: "repetition" },
  { name: "Jumping Jacks", type: "repetition" },
  { name: "Plank", type: "duration" },
  { name: "Wall Sit", type: "duration" },
  { name: "Running", type: "duration" }
];

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="app-container">
      <div className="content-box">
        {selectedExercise ? (
          <div>
            <h1>{selectedExercise.name}</h1>
            {selectedExercise.type === "repetition" ? (
              <RepetitionExercise name={selectedExercise.name} />
            ) : (
              <DurationExercise name={selectedExercise.name} />
            )}
            <button className="back-button" onClick={() => setSelectedExercise(null)}>Back to Menu</button>
          </div>
        ) : (
          <div>
            <h1>Exercise Menu</h1>
            {exercises.map((exercise, index) => (
              <button
                key={index}
                onClick={() => setSelectedExercise(exercise)}
                className="exercise-button"
              >
                {exercise.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
