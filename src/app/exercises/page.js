'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.
import React, { useState, useEffect } from 'react';
import getExercises from '../../api/exerciseData';
import ExerciseCard from '../../components/ExerciseCard';

function Home() {
  const [exercises, setExercises] = useState([]);

  const getAllTheExercises = () => {
    getExercises().then(setExercises);
  };

  useEffect(() => {
    getAllTheExercises();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exerciseObj={exercise} onUpdate={getAllTheExercises} />
      ))}
    </div>
  );
}

export default Home;
