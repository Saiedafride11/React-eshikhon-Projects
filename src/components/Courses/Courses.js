import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "@mui/material";
import AllCourse from "../AllCourse/AllCourse";

const Courses = () => {
  const [courses, setCourse] = useState();
  useEffect(() => {
    fetch("./course.JSON")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <Container>
          <br />
        <h2>Total Course: {courses?.length}</h2>
      <div style={{ display: "grid", gridTemplateColumns:" repeat(2, 1fr)", gridColumnGap: '20px'}}>
        {      
              courses?.length === 0?
              <p>Loading...</p>
              :
              courses?.map((course) => (
                <AllCourse course={course}  key={course.id}></AllCourse>))
          }
      </div>
    </Container>
  );
};

export default Courses;
