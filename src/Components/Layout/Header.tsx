import React from "react";
import { NavLink } from "react-router-dom";

let logo = require("../../Assets/logo.png");

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="28"
              height="30"
              className="d-inline-block align-text-top me-1"
            />
            Музеї світу
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/about"
              >
                Про сайт
              </NavLink>
              <NavLink className="nav-link" to="/images">
                Галерея картинок
              </NavLink>
              <NavLink className="nav-link" to="/news">
                Новини
              </NavLink>
              <NavLink className="nav-link" to="/contacts">
                Контакти
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
