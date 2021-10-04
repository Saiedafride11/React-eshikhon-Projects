import { Container } from "@mui/material";
import React from "react";
import img from '../../images/teacher.jpg';

const About = () => {
  return (
    <Container style={{ paddingTop: "100px" }}>
      <h3 style={{marginTop: "15px"}}>About Us</h3>
      <p>
        eShikhon was founded by like-minded, young and motivated individuals
        with a vision to take freelancing and remote employment as a career path
        to 160 million Bangladeshis and to create the employment of 1M
        Bangladeshis within 2022. We aim to create professionals for the
        national and international marketplaces by providing world-class smart
        IT education in Bangladesh. At eShikhon, we want to establish a
        sustainable self-dependency through the online employment model all over
        the 64 districts of Bangladesh. From the inauguration on 17th May 2017
        till today, eShikhon has trained 7630+ trainees so far, and it's
        increasing every day. Our students have reached a combined earning of $1
        million (USD) so far. Over 320K+ people are connected with us through
        social media and supporting our mission.
      </p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <div className="d-flex align-items-center">
          <div>
            <h3>Our world class Mentor</h3>
            <p style={{marginRight: '20px'}}>
              With combined experience of over 20 years in the industry, we at
              #eShikhon help students, leaders, IT and design pros, project
              managers—anyone in any role—develop web development, creative, and
              business skills. The mentors at #eShikhon is well trained. Our
              senior trainers have a vast experience of teaching as well as hand
              on experience. We expect our trainers to resolve student’s queries
              on the spot and help them become professionals.
            </p>
          </div>
        </div>
        <div>
            <img src={img} className="w-100" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default About;
