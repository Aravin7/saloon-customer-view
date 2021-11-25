import React from "react";
import "./AboutUs.css";
import { styled } from "@mui/system";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

const AboutUs = () => {
  return <MyComponent>this from about us</MyComponent>;
};

export default AboutUs;
