import React from "react";
import { useGetAllNewsQuery } from "../../API/newsApi";
import { News } from "../../Interfaces";
import { Loader, NewsPost } from "../../Components";

function AllNews() {
  const { data, isLoading } = useGetAllNewsQuery(null);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="fading-in">
          {data?.result.map((news: News, index: number) => (
            <NewsPost news={news} />
          ))}
        </div>
      )}
    </>
  );
}

export default AllNews;
