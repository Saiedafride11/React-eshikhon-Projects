import React from 'react';
import { Button, Container } from '@mui/material';
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourse] = useState();
    useEffect( () => {
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [])
    return (
       <Container>
           <div style={{display: 'flex'}}>
                <div style={{width: '65%'}}>
                    <div>
                        <br />
                        <h2>Total Course: {courses?.length}</h2>
                        {
                            courses?.slice(0, 3).map(course => <Course course={course} key={course.serial}></Course>)
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
                    <p>Catagory</p>
                </div>
            </div>
       </Container>
    );
};

export default Home;