import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../tomoto-icon.svg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <h2 className="header-title">Pomodoro</h2>
      </div>
      <div className="option-container">
        <nav>
          <FontAwesomeIcon className="header-icon" icon="file-alt" />
          Report
        </nav>
        <nav>
          <FontAwesomeIcon className="header-icon" icon="cog" />
          Setting
        </nav>
        <nav>
          <FontAwesomeIcon className="header-icon" icon="user-circle" />
          Login
        </nav>
      </div>
    </div>
  );
};

export default Header;
