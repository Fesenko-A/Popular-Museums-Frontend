import React from "react";
import { Image } from "../../../Interfaces";

interface Props {
  images: Image[];
}

function ImageBlock(props: Props) {
  return (
    <div className="d-block">
      {props.images.map((image: Image, index: number) => (
        <img
          src={image.imageUrl}
          alt={image.museum.name}
          style={{ maxHeight: "13rem" }}
          className="ms-1 me-1 rounded mt-2 img-fluid"
          key={index}
        />
      ))}
    </div>
  );
}

export default ImageBlock;
