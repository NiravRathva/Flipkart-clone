/* eslint-disable no-unused-vars */
import Navbar from "./Navbar";
import Header from "./Header";
import { useState, useEffect } from "react";
//higher order component
const Layout = (WrappedComponent) => {
  return (props) => (
    <div>
      <Navbar />
      
      <WrappedComponent {...props} />
    </div>
  );
};
export default Layout;
