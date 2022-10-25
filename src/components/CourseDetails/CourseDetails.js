import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const { courseName , picture } = course;

    return (
        <div>
            <h2>Coure details</h2>
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

export default CourseDetails;