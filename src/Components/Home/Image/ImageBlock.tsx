import React from "react";
import { Image } from "../../../Interfaces";
import { Link } from "react-router-dom";

interface Props {
  images: Image[];
}

function ImageBlock(props: Props) {
  return (
    <div className="d-block">
      {props.images.map((image: Image, index: number) => (
        <Link to={`/image/${image.imageId}`} key={index}>
          <img
            src={image.imageUrl}
            alt={image.museum.name}
            style={{ maxHeight: "13rem" }}
            className="ms-1 me-1 rounded mt-2 img-fluid"
          />
        </Link>
      ))}
    </div>
  );
}

export default ImageBlock;
