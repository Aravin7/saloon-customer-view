import React from "react";
import "./Blog.css";
import { styled } from "@mui/system";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

const Blog = () => {
  return <MyComponent>this from Blog</MyComponent>;
};

export default Blog;
