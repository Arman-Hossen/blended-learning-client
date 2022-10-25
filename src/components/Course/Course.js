import React from "react";
import { Badge } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Course.css';

const Course = ({ course }) => {
  const { id, courseName , picture,price,veiw,subscriber,about,author } = course;
  console.log(id, courseName);
  return (
    <div className='col-lg-4 col-md-12 col-sm-12'>
         <Card  className="hoverEffect">
      <Card.Img variant="top" src={picture} />
      <Card.Body>
      <div className="d-flex justify-content-between">
      <Card.Title>{courseName}</Card.Title>
        <Badge  bg="warning" text="dark" className="price p-3">
        {price}
      </Badge>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <Card.Text className=" text-uppercase fw-semibold ">
            Veiw:{" "}{veiw}k
        </Card.Text>
        <Card.Text className="text-uppercase fw-semibold ">
        Subscriber:{" "}{subscriber}k
        </Card.Text>

        

      </div>
        
        <Card.Text>
          {about.slice(0,115)+ "..."}
        </Card.Text>
        <Card.Text className="mt-4 fw-light">
            {author}
        </Card.Text>
        <Button  variant="primary"><Link className="text-white text-decoration-none" to={`/courses/${course.id}`}>Course Details</Link></Button>
      </Card.Body>
    </Card>     
    </div>
  );
};


export default Course;
