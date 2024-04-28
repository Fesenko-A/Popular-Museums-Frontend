import React from "react";
import { useGetAllNewsQuery } from "../../API/newsApi";
import { News } from "../../Interfaces";
import { NewsPost } from "../../Components";

function AllNews() {
  const { data, isLoading } = useGetAllNewsQuery(null);

  return (
    <>
      {data?.result.map((news: News, index: number) => (
        <NewsPost news={news} />
      ))}
    </>
  );
}

export default AllNews;
