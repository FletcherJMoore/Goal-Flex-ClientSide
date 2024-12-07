import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET All Workouts
const getWorkouts = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/workouts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

// GET Single Workout
const getSingleWorkout = (workoutId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/workouts/${workoutId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getWorkouts, getSingleWorkout };
