import React from "react";
import { useGetAllMuseumsQuery } from "../../../API/museumApi";
import { Museum } from "../../../Interfaces";
import { Loader, MuseumCard } from "../..";

function MuseumList() {
  const { data, isLoading } = useGetAllMuseumsQuery(null);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="fading-in">
          {data?.result.length > 0 &&
            data?.result.map((museum: Museum, index: number) => (
              <MuseumCard museum={museum} key={index} />
            ))}
        </div>
      )}
    </>
  );
}

export default MuseumList;
