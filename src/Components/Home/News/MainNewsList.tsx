import React from "react";
import { useGetNewsQuery } from "../../../API/newsApi";
import { Loader, MainNewsPost } from "../..";
import { News } from "../../../Interfaces";

function MainNewsList() {
  const { data, isLoading } = useGetNewsQuery(10);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            {data?.result.map((news: News, index: number) => (
              <MainNewsPost news={news} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MainNewsList;
