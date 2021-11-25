import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Navigation } from "../../components/Navigation/Navigation";
import { Header } from "../../components/Header/Header";
import { AboutUs } from "../AboutUs/AboutUs";
import { Booking } from "../Dashboard/Dashboard.js";
import { Home } from "../Home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
              <Header />
            </Grid>
            <Grid item md={3} xs={3}>
              <Navigation />
            </Grid>
            <Grid item md={10} xs={9}>
              <Switch>
                <Route path="/about" component={AboutUs}>
                  {/* <AboutUs/> */}
                </Route>
                <Route path="/Booking">
                  <Booking />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Box>
      </Router>
    </div>
  );
};

export default Layout;
