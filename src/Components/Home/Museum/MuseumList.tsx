import React, { useEffect, useState } from "react";
import { useGetAllMuseumsQuery } from "../../../API/museumApi";
import { Museum } from "../../../Interfaces";
import { Loader, MuseumCard } from "..";

function MuseumList() {
  const [museums, setMuseums] = useState<Museum[]>([]);
  const { data, isLoading } = useGetAllMuseumsQuery(null);

  useEffect(() => {
    if (data) {
      setMuseums(data?.result);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="fading-in">
          {museums.length > 0 &&
            museums.map((museum: Museum, index: number) => (
              <MuseumCard museum={museum} key={index} />
            ))}
        </div>
      )}
    </>
  );
}

export default MuseumList;
