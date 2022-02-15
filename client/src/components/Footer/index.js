import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  function showFooter() {
    return (
      <ul className="footerLinks">
        <li className="footerImg">
          <a
            href="https://github.com/Chrisolsen1993/Toysplanet"
            alt="githubrepo"
          >
            <img src="images/github.png" alt="githublogo" />
          </a>
        </li>
        <li className="footerImg">
          <a href="https://linkedin.com" alt="linkedin">
            <img src="images/linkedin.png" alt="linkedinlogo" />
          </a>
        </li>
      </ul>
    );
  }

  return (
    <footer className="footerContainer">
      <footer>{showFooter()}</footer>
      <h1>
        <Link to="/">
          {/* <span role="img" aria-label="shopping bag"> 🧸</span> */}
          <span role="img">
            <img id="logoplanet" src="images/logo.planet.png" width={100} />
          </span>
        </Link>
      </h1>
    </footer>
  );
}

export default Footer;
