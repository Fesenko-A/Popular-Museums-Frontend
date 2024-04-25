import React from "react";
import { useParams } from "react-router-dom";
import { useGetMuseumByIdQuery } from "../../API/museumApi";
import { Loader } from "../../Components/Home";

function MuseumDetails() {
  const { museumId } = useParams();
  const { data, isLoading } = useGetMuseumByIdQuery(museumId);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <h5 className="text-center mt-2">{data?.result.name}</h5>
          <img
            src={data?.result.imageUrl}
            alt={`${data?.result.name} - картинка недоступна :(`}
            className="img-fluid rounded mx-auto"
            style={{ height: "20rem" }}
          />
          <div className="m-3" style={{ fontSize: "1.15rem" }}>
            <div>
              Місто: {data?.result.city}
              <img
                alt={data?.result.country}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data?.result.country}.svg`}
                style={{
                  height: "1rem",
                  marginLeft: ".4rem",
                  marginBottom: ".25rem",
                }}
              />
            </div>
            Вебсайт:{" "}
            <a href={data?.result.websiteLink} target="blank">
              {data?.result.websiteLink}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default MuseumDetails;
