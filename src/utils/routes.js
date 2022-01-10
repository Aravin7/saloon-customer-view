import * as React from "react";
import Home from "../views/Home/Home";
import Booking from "../views/Booking/Booking";
import ContactUs from "../views/ContactUs/ContactUs";
import Services from "../views/Services/Services";
import Blog from "../views/Blog/Blog";
import Store from "../views/Store/Store";
import Register from "../views/Register/Register";
import SignIn from "../views/SignIn/SignIn";
// import ForgotPassword from "../views/ForgotPassword/ForgotPassword";
import Dashboard from "../views/Dashboard/Dashboard";

const routes = [
  {
    path: "/",
    exact: true,
    displayName: "HOME",
    component: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/contact",
    displayName: "Contact US",
    component: (
      <div>
        <ContactUs />
      </div>
    ),
  },
  {
    path: "/services",
    displayName: "SERVICES",
    component: (
      <div>
        <Services />
      </div>
    ),
  },
  {
    path: "/booking",
    displayName: "BOOKING",
    component: (
      <div>
        <Booking />
      </div>
    ),
  },
  {
    path: "/store",
    displayName: "STORE",
    component: (
      <div>
        <Store />
      </div>
    ),
  },
  {
    path: "/blog",
    displayName: "BLOG",
    component: (
      <div>
        <Blog />
      </div>
    ),
  },
  {
    path: "/signIn",
    displayName: "Sign In",
    component: (
      <div>
        <SignIn />
      </div>
    ),
  },
  {
    path: "/register",
    displayName: "Register",
    component: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/dashboard",
    displayName: "dashboard",
    component: (
      <div>
        <Dashboard />
      </div>
    ),
  },
];

export default routes;
