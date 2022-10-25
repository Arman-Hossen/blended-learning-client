import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = ({ course }) => {
  const { id, courseName , picture } = course;
  console.log(id, courseName);
  return (
    <div className='col-lg-4 col-md-12 col-sm-12'>
         <Card >
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>     
    </div>
  );
};


export default Course;
