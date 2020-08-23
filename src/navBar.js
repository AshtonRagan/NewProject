import React from "react";
import { NavLink } from "react-router-dom";
const navBar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Store">Store</NavLink>
        <NavLink to="/Students">Students</NavLink>
      </nav>
    </div>
  );
};
export default navBar;
