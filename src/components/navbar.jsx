import React, { Component } from "react";

// stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <div className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </div>
  );
};

export default NavBar;
