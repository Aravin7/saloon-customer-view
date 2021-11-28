import React from "react";
import "./Store.css";
import { styled } from "@mui/system";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

const Store = () => {
  return <MyComponent>this from Store</MyComponent>;
};

export default Store;
