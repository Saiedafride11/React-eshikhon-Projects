import React from 'react';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import img1 from '../../images/client-1.png';
import img2 from '../../images/client-2.png';
import img3 from '../../images/client-3.png';

const Client = () => {
    return (
        <section className="pb-5">
            <div className="container">
                <h2 className="text-center pt-5 pb-4">Happy Clients</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 text-center">
                    <div className="col">
                        <div className="card border h-100">
                            <div className="p-3">
                                <img src={img1} className="card-img-top w-50" alt="..."/>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-secondary">
                                    Slate helps you see how <br />
                                    many more days you need <br />
                                    to work to reach your financial <br />
                                    goal for the month and year.
                                    </p>
                                <div className="d-flex justify-content-center">
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                </div>
                                <h5 className="my-3" style={{color: '#1976d2'}}>Mr Danilo Adler</h5>
                                <h6>Businessman</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border h-100">
                            <div className="p-3">
                                <img src={img2} className="card-img-top w-50" alt="..."/>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-secondary">
                                    Slate helps you see how <br />
                                    many more days you need <br />
                                    to work to reach your financial <br />
                                    goal for the month and year.
                                    </p>
                                <div className="d-flex justify-content-center">
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarBorderIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarBorderIcon>
                                </div>
                                <h5 className="my-3" style={{color: '#1976d2'}}>Miss Luke Griege</h5>
                                <h6>Banker</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border h-100">
                            <div className="p-3">
                                <img src={img3} className="card-img-top w-50" alt="..."/>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-secondary">
                                    Slate helps you see how <br />
                                    many more days you need <br />
                                    to work to reach your financial <br />
                                    goal for the month and year.
                                    </p>
                                <div className="d-flex justify-content-center">
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarIcon>
                                    <StarBorderIcon style={{marginLeft: '2px', color:'#1976d2'}}></StarBorderIcon>
                                </div>
                                <h5 className="my-3" style={{color: '#1976d2'}}>Miss Da Cruz</h5>
                                <h6>Teacher</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;