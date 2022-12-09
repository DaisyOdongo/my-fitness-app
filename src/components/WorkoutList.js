import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import Exercise from "./Exercise";


function WorkoutList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("/exercises")
      .then((response) => response.json())
      .then(setExercises);
  }, []);

  return (
    <div>
      {exercises.length > 0 ? (
        exercises.map((exercise) => (
          <Exercise key={exercise.id}>
            <div>
              <h2>{exercise.title}</h2>
              <p>
                Duration: {exercise.duration} minutes
              </p>
              <ReactMarkdown>{exercise.description}</ReactMarkdown>
            </div>
          </Exercise>
        ))
      ) : (
        <>
          <h2>No Workouts Found</h2>
          <button as={NavLink} to="/new">
            Enter a New Workout
          </button>
        </>
      )}
    </div>
  );
}

export default WorkoutList

