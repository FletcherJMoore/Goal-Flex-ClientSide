'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteExercise } from '../api/exerciseData';
// import Link from 'next/link';

function ExerciseCard({ exerciseObj, onUpdate }) {
  const deleteThisCard = () => {
    if (window.confirm(`Delete ${exerciseObj.title}?`)) {
      deleteExercise(exerciseObj.id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={exerciseObj.image} alt={exerciseObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{exerciseObj.title}</Card.Title>
        <Link href={`/exercises/${exerciseObj.id}`} passHref>
          <Button variant="primary">View</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisCard} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ExerciseCard.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  exerciseObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ExerciseCard;
