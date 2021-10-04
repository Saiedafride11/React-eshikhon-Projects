import { Container } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Container style={{padding: '150px 0 330px'}}>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h1 className="mx-4">404</h1>
        </div>
        <div>
          <h5>Oops! You're lost.</h5>
          <p>The page you are looking for was not found.</p>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
