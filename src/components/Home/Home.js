import React from 'react';
import { Button, Container } from '@mui/material';
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import Services from '../Services/Services';

const Home = () => {
    const [courses, setCourse] = useState();
    useEffect( () => {
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [])
    return (
       <Container className="mt-5">
           <div style={{display: 'flex'}}>
                <div style={{width: '75%'}}>
                    <div>
                        <br />
                        <h2>Total Course: {courses?.length}</h2>
                        {   
                            courses?.length === 0 ?
                            <p>Loading...</p>
                            :
                            courses?.slice(0, 3).map(course => <Course course={course} key={course.id}></Course>)
                        }
                    </div>
                    <br />
                    <div style={{textAlign: "center"}}>
                        <Link to="/courses" style={{textDecoration: 'none'}}>
                            <Button variant="contained">View All Courses</Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Services></Services>
                </div>
            </div>
       </Container>
    );
};

export default Home;