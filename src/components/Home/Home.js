import React from "react";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import BestService from "../BestService/BestService";
import Client from "../Client/Client";
import Banner from "../Banner/Banner";

const Home = () => {
  const [courses, setCourse] = useState();
  useEffect(() => {
    fetch("./course.JSON")
    .then((res) => res.json())
    .then((data) => setCourse(data));
  }, []);
  return (
    <div>

      {/* Banner Section */}
      <section>
        <Banner></Banner>
      </section>

      <Container style={{ paddingTop: "20px" }}>
        {/* Services Section */}
        <section style={{ display: "flex" }}>
          <div style={{ width: "75%" }}>
            <div>
              <h2 style={{marginTop: "15px"}}>Total Course Available: {courses?.length}</h2>
              {
                courses?.length === 0 ? 
                <h2 style={{marginTop:'30px', textAlign:'center', color: '#1976d2'}}>Loading...</h2>
                :
                courses?.slice(0, 4).map(course => <Course course={course} key={course.id}></Course>)
              }
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <Link to="/services" className="text-decoration-none">
                <Button variant="contained">View All Courses</Button>
              </Link>
            </div>
          </div>
          <div>
            <BestService></BestService>
          </div>
        </section>

        {/* Client feedback */}
        <section>
          <Client></Client>
        </section>
      </Container>
    </div>
  );
};

export default Home;
