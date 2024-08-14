import React from "react";
import { StyledChildrenLayout, StyledLayout } from "./layout.styled";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledChildrenLayout>{children}</StyledChildrenLayout>
    </StyledLayout>
  );
};

export default Layout;
