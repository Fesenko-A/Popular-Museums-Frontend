import React from "react";
import { Link } from "react-router-dom";

let museumImage = require("../../Assets/museum.jpg");
let newsImage = require("../../Assets/news.jpg");
let contactsImages = require("../../Assets/contacts.avif");

function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to="/museums">
            <img
              src={museumImage}
              className="d-block w-100"
              alt="Музеї"
              style={{ maxHeight: "40vh", objectFit: "cover" }}
            />
          </Link>
          <div className="carousel-caption">
            <h5>Музеї</h5>
            <p className="d-none d-md-block">
              Натисніть на зображення для перегляду списку найвідоміших музеїв!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <Link to="/news">
            <img
              src={newsImage}
              className="d-block w-100"
              alt="Новини"
              style={{ maxHeight: "40vh", objectFit: "cover" }}
            />
          </Link>
          <div className="carousel-caption text-dark">
            <h5>Новини</h5>
            <p className="d-none d-md-block">
              Ознайомлюйтеся з новинами порталу найпершими
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <Link to="/contacts">
            <img
              src={contactsImages}
              className="d-block w-100"
              alt="Контакти"
              style={{ maxHeight: "40vh", objectFit: "cover" }}
            />
          </Link>
          <div className="carousel-caption text-dark">
            <h5>Контакти</h5>
            <p className="d-none d-md-block">
              У разі виникнення питань або пропозицій
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
