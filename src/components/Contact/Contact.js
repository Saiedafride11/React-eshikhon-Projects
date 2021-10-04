import { Button, Container } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Container style={{paddingTop: '80px'}}>
      <br />
      <h2 className="text-center py-1">Contact Us</h2>
      <form className="row g-3 p-5">
        <div className="col-md-6">
          <label for="fName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name..."
            className="form-control"
            id="fName"
          />
        </div>
        <div className="col-md-6">
          <label for="lName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name..."
            className="form-control"
            id="lName"
          />
        </div>
        <div className="col-md-6">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Email..."
            className="form-control"
            id="email"
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            placeholder="Phone..."
            className="form-control"
            id="phone"
          />
        </div>
        <div className="col-md-6">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            placeholder="Address..."
            className="form-control"
            id="address"
          />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>Dhaka</option>
            <option>Mymensingh</option>
            <option>Feni</option>
            <option>CTG</option>
            <option>More...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            placeholder="Zip..."
            className="form-control"
            id="inputZip"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <Button variant="contained">Sign in</Button>
        </div>
      </form>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', backgroundColor: '#1976d2', borderRadius: '5px'}} className="text-center text-white p-3">
        <div>
          <h4>Address</h4>
          <p>House 74, Banani, Dhaka-1213</p>
        </div>
        <div>
          <h4>Phone</h4>
          <p>01730258276, 01303787842
          </p>
        </div>
        <div>
          <h4>Email</h4>
          <p>hello@eshikhun.com</p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
