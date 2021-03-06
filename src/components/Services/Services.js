import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "@mui/material";
import AllCourse from "../AllCourse/AllCourse";

const Services = () => {
  const [courses, setCourse] = useState();
  useEffect(() => {
    fetch("./course.JSON")
    .then((res) => res.json())
    .then((data) => setCourse(data));
  }, []);
  return (
    <Container style={{paddingTop:'80px'}}>
      <h2 style={{paddingTop:'15px'}}>Total Course Available: {courses?.length}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: " repeat(2, 1fr)",
          gridColumnGap: "20px",
        }}
      >
      {
        courses?.length === 0 ? 
          <h2 style={{marginTop:'30px', color: '#1976d2'}}>Loading...</h2>
        : 
        courses?.map(course => <AllCourse course={course} key={course.id}></AllCourse>)
      }
      </div>
    </Container>
  );
};

export default Services;