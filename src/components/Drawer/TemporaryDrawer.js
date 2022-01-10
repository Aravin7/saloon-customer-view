import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { withRouter } from "react-router";
import routes from "../../utils/routes";
import Navigation from "../Navigation/Navigation";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import "./TemporaryDrawer.css";

const TemporaryDrawer = () => {
  let history = useHistory();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (e) => {
    e.preventDefault();
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  // const SignOutUser = () => {
  //   localStorage.setItem("isLoggedIn", null);
  //   localStorage.setItem("authToken", null);
  //   localStorage.setItem("role", null);
  //   history.push("/");
  // };

  // const list = () => (
  //   <Box
  //     className="test"
  //     sx={{ width: 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer()}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <Router>
      <div className="drawer">
        <Button>{<MenuIcon onClick={toggleDrawer()} />}</Button>
        <Drawer open={open} onClose={toggleDrawer()}>
          <Box
            className="nav-list"
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer()}
          >
            <Navigation />
            <ListItem button>
              <ListItemText
                onClick={() => {
                  console.log("aa");
                  localStorage.setItem("isLoggedIn", null);
                  localStorage.setItem("authToken", null);
                  localStorage.setItem("role", null);
                  history.push("/");
                  window.location.reload();
                }}
              >
                Sign out
              </ListItemText>
            </ListItem>
          </Box>
        </Drawer>
      </div>
      <Box className="main">
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
    </Router>
  );
};

export default TemporaryDrawer;
