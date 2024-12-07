'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleExercise } from '../../../api/exerciseData';

export default function ViewExercise({ params }) {
  const [exerciseDetails, setExerciseDetails] = useState({});

  const fetchExerciseDetails = () => {
    if (params.exerciseId) {
      getSingleExercise(params.exerciseId).then((data) => {
        console.log('Fetched exercise details:', data); // Log for debugging
        setExerciseDetails(data);
      });
    }
  };

  useEffect(() => {
    fetchExerciseDetails();
  }, [params.exerciseId]);

  return (
    <div>
      <div className="details-header-container">
        <div className="card-detials-image">
          <img src={exerciseDetails.image} alt={exerciseDetails.name} style={{ width: '300px' }} />
        </div>
        <div className="card-details">
          <h2 className="card-details-title">{exerciseDetails.title}</h2>
          <div className="card-details-sub-title">
            <h4>Instructions:</h4>
            <p>{exerciseDetails.instructions || ''}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

ViewExercise.propTypes = {
  params: PropTypes.shape({
    exerciseId: PropTypes.number.isRequired,
  }).isRequired,
};
