import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navLinks">
          <li className="navImg">
            <Link to="/">
              <img src="images/home.png" alt="home" />
            </Link>
          </li>
          <li className="navImg">
            <Link to="/profile">
              <img src="images/profile.png" alt="profile" />
            </Link>
          </li>
          <li className="navImg">
            <Link to="/orderHistory">
              <img src="images/order-delivery.png" alt="orderhistory" />
            </Link>
          </li>
          <li className="navImg">
            <Link to="/messenger">
              <img src="images/message.png" alt="messages" />
            </Link>
          </li>
          <li className="navImg">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              <img src="images/logout.png" alt="logout" />
            </a>
          </li>

          <li className="navImg">
            <Link to="/cart">
              <img src="images/cart.png" alt="cart" />
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navLinks">
          <li className="navImg">
            <Link to="/login">
              <img src="images/login.png" alt="login" />
            </Link>
          </li>
          <li className="navImg">
            <Link to="/signup">
              <img src="images/signup.png" alt="signup" />
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="linkContainer">
      <h1>
        <span role="img">
          <img id="logoplanet" src="images/logo.planet.png" width={150} />
        </span>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
