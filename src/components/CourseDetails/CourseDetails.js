import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

const CourseDetails = () => {
  const { serialId } = useParams();
  const [courses, setCourse] = useState();
  const [carts, setCart] = useState();

  useEffect(() => {
    fetch("../../course.JSON")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  useEffect(() => {
    const newCourse = courses?.filter((cs) => cs.id === serialId);
    setCart(newCourse);
  }, [courses]);
  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      {carts?.length === 0 ? (
        <div style={{ padding: "150px 0 300px" }}>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <h1 className="mx-4">404</h1>
            </div>
            <div>
              <h5>Oops! You're lost.</h5>
              <p>The page you are looking for was not found.</p>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ paddingTop: "100px" }}>
          {carts?.map((cart) => (
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
              key={cart.id}
            >
              <div className="mx-auto" style={{ width: "20%" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%" }}
                  image={cart.mentor_img}
                  alt="Live from space album cover"
                  className="rounded-circle"
                />
              </div>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    <h4>
                      <strong>{cart.title}</strong>
                    </h4>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <div>
                      <p className="mb-0">
                        <strong>Mentor:</strong>{" "}
                        <small>{cart.mentor_name}</small>
                      </p>
                      <p className="mb-0">
                        <strong>Course Fee:</strong> <small>${cart.fee}</small>
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "100px" }}>
                        <p className="mb-0">
                          <small>
                            <strong>Classes: </strong>
                            {cart.class}
                          </small>
                        </p>
                        <p className="mb-0">
                          <small>
                            <strong>Houres: </strong>
                            {cart.hour}
                          </small>
                        </p>
                        <p>
                          <small>
                            <strong>Seats Lefts: </strong>
                            {cart.seat}
                          </small>
                        </p>
                      </div>
                      <div>
                        <p>
                          <Rating
                            name="read-only"
                            value={cart.ratting}
                            readOnly
                          />
                        </p>
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Box>
              <div className="mx-auto" style={{ width: "40%" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "420px" }}
                  image={cart.course_img}
                  alt="Live from space album cover"
                />
              </div>
            </Card>
          ))}
          <br />
          <h5>Course Description:</h5>
          <p>
            This Course is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
