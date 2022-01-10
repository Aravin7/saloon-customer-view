import React from "react";
// import Box from "@mui/material/Box";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import routes from "./utils/routes";
// import Navigation from "./components/Navigation/Navigation";
import TemporaryDrawer from "./components/Drawer/TemporaryDrawer";
// import Home from './container/Home';
// import Booking from './container/authUser/Booking';
// import Contact from './container/Contact';
// import Services from './container/Services';

const App = () => {
  return (
    /* { <Router>
      <Header /> 
       <Box sx={{ display: "flex" }}>
        <Box className={"nav"}>
          <Navigation />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Switch>
            {routes.map((item, index) => {
              // console.log(routes);
              return (
                <Route exact key={index} path={item.path}>
                  {item.component}
                </Route>
              );
            })}
          </Switch>
        </Box>
      </Box>
    </Router> }*/
    <Router>
      <TemporaryDrawer />
    </Router>
  );
};

export default App;
