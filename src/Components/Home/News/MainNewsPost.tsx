import React from "react";
import { News } from "../../../Interfaces";

interface Props {
  news: News;
}

function MainNewsPost(props: Props) {
  return (
    <div className="card mt-2 mb-2 me-1 ms-1 col-5">
      <div className="m-3">
        <h6>{props.news.title}</h6>
        <div>{new Date(props.news.datePosted).toUTCString()}</div>
      </div>
      <div className="fs-6 me-3 ms-3 mb-3">{props.news.description}</div>
    </div>
  );
}

export default MainNewsPost;
