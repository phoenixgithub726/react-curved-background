import React, { useState, createRef, Fragment, useEffect } from "react";
import HomeIcon from '@material-ui/icons/Home';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const ListItems = function ({ history }) {

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [user, setUser] = useState([]);
  const toggleDrawer = (open) => () => {
    setDrawer(open)
  };

  return (
    <div>
      <List>
        <ListItem button>
          <ListItemText primary={'Navigation'} style={{ textAlign: 'center' }} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem >
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={'My Loan Status'} />
          <ListItemIcon> <NavigateNextIcon /> </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem >
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={'My Loan Status'} />
          <ListItemIcon> <NavigateNextIcon /> </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem >
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={'Loan Appliction'} />
          <ListItemIcon> <NavigateNextIcon /> </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem >
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={'Documents'} />
          <ListItemIcon> <NavigateNextIcon /> </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem >
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={'Calculators'} />
          <ListItemIcon> <NavigateNextIcon /> </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem >
          <ListItemIcon> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={'Messages'} />
          <ListItemIcon> <NavigateNextIcon /> </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
    </div>
  )
}
export default ListItems;