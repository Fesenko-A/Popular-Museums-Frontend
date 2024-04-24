import React from "react";
import { Museum } from "../../../Interfaces";

interface Props {
  museum: Museum;
}

function MuseumCard(props: Props) {
  return (
    <>
      <div>{props.museum.name}</div>
      <div>{props.museum.city}</div>
      <div>{props.museum.country}</div>
      <div>{props.museum.description}</div>
      <div>{props.museum.foundationYear}</div>
      <div>{props.museum.visitorsPerYear}</div>
      <div>{props.museum.websiteLink}</div>
      <img src={props.museum.imageUrl} alt={props.museum.name} />
    </>
  );
}

export default MuseumCard;
