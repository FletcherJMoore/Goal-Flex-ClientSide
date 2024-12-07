import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// // GET All Exercises
// const getExercises = () =>
//   new Promise((resolve, reject) => {
//     fetch(`${endpoint}/exercises`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => resolve(Object.values(data)))
//       .catch(reject);
//   });

// READ Categories
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

export default getExercises;
