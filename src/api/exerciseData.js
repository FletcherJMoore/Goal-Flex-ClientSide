import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// Get all exercises
const getExercises = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/exercise`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

// Get single exercise
const getSingleExercise = (exerciseId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/exercise/${exerciseId}`, {
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
const createExercise = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/exercise`, {
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
const updateExercise = (exerciseId, payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/exercise/${exerciseId}`, {
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

// DELETE exercise
const deleteExercise = (exerciseId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/exercise/${exerciseId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getExercises, getSingleExercise, createExercise, updateExercise, deleteExercise };
