import React from "react";
import { useParams } from "react-router-dom";
import { useGetMuseumByIdQuery } from "../../API/museumApi";
import { ImageBlock, Loader } from "../../Components/Home";
import { useGetImageByMuseumIdQuery } from "../../API/imageApi";

function MuseumDetails() {
  const { museumId } = useParams();
  const { data: imagesData, isLoading: imagesLoading } =
    useGetImageByMuseumIdQuery(museumId);
  const { data, isLoading } = useGetMuseumByIdQuery(museumId);

  const numberWithCommas = (num: number) => {
    let parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="fading-in fs-5">
          <div className="d-flex mt-3">
            <img
              src={data?.result.imageUrl}
              alt={`${data?.result.name}`}
              className="img-fluid img-thumbnail ms-auto"
              style={{ height: "13rem" }}
            />
            <div className="me-auto ms-3 mt-auto mb-auto">
              <h5>{data?.result.name}</h5>
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
              <div>
                Вебсайт:&nbsp;
                <a href={data?.result.websiteLink} target="blank">
                  {data?.result.websiteLink}
                </a>
              </div>
              <div>
                К-сть відвідувачів на рік:&nbsp;
                {numberWithCommas(data?.result.visitorsPerYear)}
              </div>
              <div>Засновано: {data?.result.foundationYear} рік</div>
            </div>
          </div>
          <div className="m-4" style={{ textAlign: "justify" }}>
            {data?.result.description}
          </div>
          {imagesLoading && <Loader />}
          {!imagesLoading && (
            <div className="text-center">
              Зображення
              <ImageBlock images={imagesData?.result} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MuseumDetails;
