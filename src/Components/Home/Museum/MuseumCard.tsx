import React from "react";
import { Museum } from "../../../Interfaces";
import { Link } from "react-router-dom";

interface Props {
  museum: Museum;
}

function MuseumCard(props: Props) {
  return (
    <div className="card mt-1 mb-2 mx-auto col-11">
      <div className="row g-0">
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5 mt-auto mb-auto">
          <Link to={`/museumDetails/${props.museum.id}`}>
            <img
              src={props.museum.imageUrl}
              alt={`${props.museum.name} - картинка недоступна :(`}
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-7 col-7">
          <div className="card-body">
            <h5 className="card-title">
              {props.museum.name}
              <img
                alt={props.museum.country}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.museum.country}.svg`}
                style={{
                  height: "1rem",
                  marginLeft: ".4rem",
                  marginBottom: ".25rem",
                }}
              />
            </h5>
            <p className="card-text museum-card">{props.museum.description}</p>
            <p className="card-text">
              Засновано у {props.museum.foundationYear} році
              <br />
              <a
                className="card-text"
                target="blank"
                href={props.museum.websiteLink}
              >
                Офіційна сторінка
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuseumCard;
