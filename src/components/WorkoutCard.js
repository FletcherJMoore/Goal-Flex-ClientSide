'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
// import Link from 'next/link';

function WorkoutCard({ workoutObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={workoutObj.image} alt={workoutObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{workoutObj.title}</Card.Title>
        <p>{workoutObj.difficulty}</p>
        <Link href={`/workouts/${workoutObj.id}`} passHref>
          <Button variant="primary">View</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

WorkoutCard.propTypes = {
  workoutObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    difficulty: PropTypes.string,
  }).isRequired,
};

export default WorkoutCard;
