import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-light box-shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success">Search</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
