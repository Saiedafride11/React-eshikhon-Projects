import { Button } from "@mui/material";
import React from "react";
import "./Banner.css";
import img from "../../images/computer-work.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-inner">
          <div className="d-flex align-items-center">
            <div>
                <h1>Welcome The eShikhon Platform!</h1>
                <p>A learning system based on formalised teaching but with the help of electronic resources is known as E-learning.</p>
                <Button variant="contained">Learn More</Button>
            </div>
          </div>
          <div>
            <img src={img} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
