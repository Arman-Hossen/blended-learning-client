import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import './Courses.css'

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      <h2 className="text-primary text-center items-center text-2xl mb-3">
        Coureses For student of {"  "}
        <span className="text-warning">Computer Science</span>
      </h2>
      <Row className="mx-5">
        <Col lg={4} className="bg-light text-center">
          {courses.map((course) => (
            <p className="mt-4  border border-primary py-3 goToDetails   " key={course.id}>
              <Link className="text-decoration-none text-dark  " to={`/courses/${course.id}`}>{course.courseName}</Link>
            </p>
          ))}
        </Col>

        <Col lg={8} className='mt-5'>
          <div className="row g-5">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
