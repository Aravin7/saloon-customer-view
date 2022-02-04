import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Register = () => {
  const [cus_name, setCus_name] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [tel_no, setTel_no] = useState("");
  const [responseData, setResponseData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  //const history = useHistory();

  const createAccount = () => {
    //const token = localStorage.getItem("authToken");
    console.log("token");
    //Try to register the user
    //if successfully register the user,redirect to the login page
    //else show the relevent error msg
    const data = {
      cus_name: cus_name,
      password: password,
      email: email,
      tel_no: tel_no,
    };
    //console.log("data", data);

    fetch("http://localhost:4000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
        console.log("response", response);
      })
      .then((data) => {
        console.log("data", data);
        setResponseData(data);
        setShowAlert(true);
        setCus_name("");
        setPassword("");
        setEmail("");
        setTel_no("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form>
      <h2>Sign Up!</h2>
      <fieldset>
        <legend>Create Account</legend>
        <ul>
          <li>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              required
              onChange={(e) => setCus_name(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="tel_no">Telephone NO:</label>
            <input
              type="tel"
              id="telephoneNo"
              required
              onChange={(e) => setTel_no(e.target.value)}
            />
          </li>
        </ul>
      </fieldset>
      <button onClick={() => createAccount()}>Register</button>
      <button type="button">
        <Link to="/signIn">Have an Account?</Link>
      </button>
    </form>
  );
};

export default Register;
