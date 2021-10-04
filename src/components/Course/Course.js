import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const Course = (props) => {
  const { title, mentor_name, fee, course_img, id } = props.course;
  const history = useHistory();

  const handleCourseClick = () => {
    history.push(`/course/${id}`);
  };

  return (
    <div>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              <h3>{title}</h3>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <div>
                <p className="mb-0"><strong>Mentor:</strong> <small>{mentor_name}</small></p>
                <p><strong>Course Fee:</strong> <small>${fee}</small></p>
              </div>
            </Typography>
            <Button onClick={handleCourseClick} variant="contained">
              Course Details
            </Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "300px" }}
          image={course_img}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default Course;
