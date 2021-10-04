import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const AllCourse = (props) => {
  const { title, mentor_name, course_img, fee, ratting, id } = props.course;
  const history = useHistory();

  const handleCourseClick = () => {
    history.push(`/course/${id}`);
  };
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            <h6 className="mb-0"><strong>{title}</strong></h6>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
          <div>
            <p className="mb-0"><strong>Mentor:</strong> <small>{mentor_name}</small></p>
            <div className="d-flex">
              <p><strong>Course Fee:</strong> <small>${fee}</small></p>
              <StarIcon style={{ marginLeft: "10px", color: "#1976d2" }}></StarIcon><p>{ratting}</p>
            </div>
          </div>
          </Typography>
          <Button onClick={handleCourseClick} variant="contained">Course Details</Button>
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

export default AllCourse;
