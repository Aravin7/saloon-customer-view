import * as React from "react";
import Home from "../views/Home/Home";
import Booking from "../views/Booking/Booking";
import ContactUs from "../views/ContactUs/ContactUs";
import Services from "../views/Services/Services";
import Register from "../views/Register/Register";
import SignIn from "../views/SignIn/SignIn";
import ForgotPassword from "../views/ForgotPassword/ForgotPassword";

const routes = [
  {
    path: "/",
    displayName: "HOME",
    component: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/Contact",
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
    path: "/register",
    displayName: "Register",
    component: (
      <div>
        <Register />
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
    path: "/forgotPassword",
    displayName: "forgotPassword",
    component: (
      <div>
        <ForgotPassword />
      </div>
    ),
  },
];

export default routes;
