import React from "react";
import "./Dashboard.css";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn, "HHHH");
  if (isLoggedIn === "null") {
    return <Redirect from="/" to="/SignIn" />;
  }
  return <h1>Customer Dashboard</h1>;
};

export default Dashboard;
