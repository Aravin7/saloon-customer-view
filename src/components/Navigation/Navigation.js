import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import routes from "../../utils/routes";

// const navList = [
//   {
//     path: "/",
//     displayName: "HOME",
//   },
//   {
//     path: "/contact",
//     displayName: "Contact Us",
//   },
//   {
//     path: "/services",
//     displayName: "SERVICES",
//   },
//   {
//     path: "/booking",
//     displayName: "BOOKING",
//   },
//   {
//     path: "/store",
//     displayName: "STORE",
//   },
//   {
//     path: "/blog",
//     displayName: "BLOG",
//   },
// ];

// const propOwn = Object.getOwnPropertySymbols(routes);
// console.log("length is", propOwn.length);
// const numberOfRoutes =  routes.length();

//filter the the first 6 elements using index from the "routes" object array and make the navigation list
const navList = routes.filter(function (place, index) {
  return index < 7;
});

const Navigation = (props) => {
  return (
    <>
      <List>
        {navList.map((item, index) => (
          <Link to={item.path}>
            <ListItem button key={index}>
              <ListItemText primary={item.displayName} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Navigation;
