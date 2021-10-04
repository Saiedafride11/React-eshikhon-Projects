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

const Services = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div className="category ">
      <br />
      <h2 style={{margin: '0 0 20px 20px'}}>Services</h2>
      <div className={classes.root} style={{marginLeft: '20px'}}>
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Vault Keys Giveway" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Misc Guns Locations" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="Looking for Players" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
          >
            <ListItemText primary="Stupid Bugs  Solves" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
          >
            <ListItemText primary="Video  Audio Drivers" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 7)}
          >
            <ListItemText primary="2K Official Forums" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Services;
