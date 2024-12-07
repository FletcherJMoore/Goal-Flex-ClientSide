'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.
import React, { useState, useEffect } from 'react';
import WorkoutCard from '../components/WorkoutCard';
import { getWorkouts } from '../api/workoutData';

function Home() {
  const [workouts, setWorkouts] = useState([]);

  const getAllTheWorkouts = () => {
    getWorkouts().then(setWorkouts);
  };

  useEffect(() => {
    getAllTheWorkouts();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workoutObj={workout} onUpdate={getAllTheWorkouts} />
      ))}
    </div>
  );
}

export default Home;
