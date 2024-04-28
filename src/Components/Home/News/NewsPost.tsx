import React from "react";
import { News } from "../../../Interfaces";

interface Props {
  news: News;
}

function NewsPost(props: Props) {
  return (
    <div className="card mt-2 mb-2 mx-auto col-11">
      <div className="d-flex me-3 ms-3 mt-3 mb-1">
        <h5 className="col-7">{props.news.title}</h5>
        <div className="col-5 text-end">
          {new Date(props.news.datePosted).toUTCString()}
        </div>
      </div>
      <div className="fs-5 me-3 ms-3 mb-3">{props.news.description}</div>
    </div>
  );
}

export default NewsPost;
