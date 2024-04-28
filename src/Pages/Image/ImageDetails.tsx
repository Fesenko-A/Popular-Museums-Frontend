import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetImageByIdQuery } from "../../API/imageApi";
import { Loader } from "../../Components";

function ImageDetails() {
  const { imageId } = useParams();
  const { data, isLoading } = useGetImageByIdQuery(imageId);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="fading-in container-fluid">
          <div style={{ width: "90%" }} className="text-center mx-auto">
            <div>
              <img
                className="img-fluid rounded mt-3"
                style={{ maxHeight: "65vh" }}
                src={data?.result.imageUrl}
                alt={data?.result.museum.name}
              />
            </div>
            <div>
              <h4 className="mt-3">{data?.result.museum.name}</h4>
              <h5>
                {data?.result.museum.city}
                <img
                  alt={data?.result.museum.country}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data?.result.museum.country}.svg`}
                  style={{
                    height: "1rem",
                    marginLeft: ".4rem",
                    marginBottom: ".25rem",
                  }}
                />
              </h5>
              <Link to={`/museumDetails/${data?.result.museum.id}`}>
                Детальніше
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageDetails;
