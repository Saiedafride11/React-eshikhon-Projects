import { List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const BestService = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div className="category ">
      <br />
      <h2 style={{margin: '0 0 20px 20px'}}>Best Service</h2>
      <div className={classes.root} style={{marginLeft: '20px'}}>
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Offline Course" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Online Course" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="Pre-record video Course" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemText primary="Best Teacher" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
          >
            <ListItemText primary="Best Guide" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            <ListItemText primary="Freelancing Training" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 8}
            onClick={(event) => handleListItemClick(event, 8)}
          >
            <ListItemText primary="Job and Internship Opportunity" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 9}
            onClick={(event) => handleListItemClick(event, 9)}
          >
            <ListItemText primary="Nice and Cool Environment" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 10}
            onClick={(event) => handleListItemClick(event, 10)}
          >
            <ListItemText primary="Beginner Friendly learning system" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default BestService;