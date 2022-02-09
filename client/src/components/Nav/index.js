import React from "react";
import Cart from "../Cart/index";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row nav">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <Link to="/messenger">Messenger</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <Cart />
          </li>
        </ul>
      );
    } else {
      return (
        <ul className=" navlinks">
          <li className="mx-1">
            <Link className="navLink" to="/">
              Homepage
            </Link>
          </li>
          <li className="mx-1">
            <Link className="navLink" to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link className="navLink" to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="linkContainer px-1">
      <h1>
        <Link to="/">
          {/* <span role="img" aria-label="shopping bag"> 🧸</span> */}
          <span role="img">
            <img id="logoplanet" src="images/logo.planet.png" width={150} />
          </span>
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
