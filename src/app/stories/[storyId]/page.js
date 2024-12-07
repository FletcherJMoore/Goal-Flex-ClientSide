'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleWorkout } from '../../../api/workoutData';

export default function ViewWorkout({ params }) {
  const [workoutDetails, setWorkoutDetails] = useState({});

  const fetchWorkoutDetails = () => {
    if (params.workoutId) {
      getSingleWorkout(params.workoutId).then((data) => {
        console.log('Fetched exercise details:', data); // Log for debugging
        setWorkoutDetails(data);
      });
    }
  };

  useEffect(() => {
    fetchWorkoutDetails();
  }, [params.workoutId]);

  return (
    <div>
      <div className="details-header-container">
        <div className="card-detials-image">
          <img src={workoutDetails.image} alt={workoutDetails.name} style={{ width: '300px' }} />
        </div>
        <div className="card-details">
          <h2 className="card-details-title">{workoutDetails.title}</h2>
          <div className="card-details-sub-title">
            <h4>About:</h4>
            <p>{workoutDetails.time || ''}</p>
            <p>{workoutDetails.difficulty || ''}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

ViewWorkout.propTypes = {
  params: PropTypes.shape({
    workoutId: PropTypes.number.isRequired,
  }).isRequired,
};
