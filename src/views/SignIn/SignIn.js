import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { isObject } from "lodash";
import { useHistory } from "react-router-dom";
//import Home from "../Home/Home";

const SignIn = () => {
  // const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const authenticateUser = (e) => {
    e.preventDefault();
    const data = { username: username, password: password };
    fetch("http://localhost:4000/users/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.token);
        if (isObject(data)) {
          let role = String(data.role);
          console.log("role", role);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("role", data.role);
          localStorage.setItem("authToken", data.token);
          // let isLoggedIn = localStorage.getItem("isLoggedIn");
          //validate user as"customer"& Redirect to dashborad
          history.push("/dashboard");
          //alert("sucessfuly loginto the system");
          // alert popup when try to log in the non-user of the system
          // setMessage(
          //   "You haven't had any credentials to have log into the System"
          // );
          // else
          //   alert(
          //     "You haven't had any credentials to have log into the System"
          //   );
        } else {
          //       //alert popup when username or password is wrong.
          alert(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form>
      <h2>Welcome Back!</h2>
      <fieldset>
        <ul>
          <li>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="current-username"
              required
            />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </li>
        </ul>
      </fieldset>
      <button onClick={authenticateUser}>Login</button>
      <button type="button">
        <Link to="/register">Create an Account</Link>
      </button>
    </form>
  );
};

export default SignIn;
