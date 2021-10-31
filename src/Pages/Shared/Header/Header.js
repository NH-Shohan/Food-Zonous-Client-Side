import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import useAuth from "./../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark px-5 shadow-lg">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand d-md-flex text-warning">
            <img className="logo ms-md-5" src={logo} alt="" />
            <h4 className="ms-3 my-auto">FOOD ZONOUS</h4>
          </Link>
          <form className="d-md-flex ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul
                className="nav nav-pills me-md-5"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <Link to="/home" className="nav-link nav-bar">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link nav-bar">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/items" className="nav-link nav-bar">
                    Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link nav-bar">
                    Contact
                  </Link>
                </li>
              </ul>

              <form className="d-md-flex">
                <Link className="text-warning fs-5 pe-4 fw-bold text-decoration-none text-warning my-md-auto">
                  {user?.displayName}
                </Link>
                {user.email ? (
                  <div className="d-flex me-3">
                    <Link
                      to="/addItem"
                      className="nav-link nav-bar rounded-3 me-3"
                    >
                      Add Items
                    </Link>
                    <button
                      type="button"
                      className="btn btn-outline-warning fw-bold"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn btn-outline-warning fw-bold"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </form>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
