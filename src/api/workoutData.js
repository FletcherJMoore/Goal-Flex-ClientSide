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

// POST Workout
const createWorkout = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// PUT Workout
const updateWorkout = (workoutId, payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/workouts/${workoutId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

// DELETE Workout
const deleteWorkout = (workoutId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/workouts/${workoutId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getWorkouts, getSingleWorkout, createWorkout, updateWorkout, deleteWorkout };
