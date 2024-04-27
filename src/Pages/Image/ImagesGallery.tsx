import React, { useEffect, useState } from "react";
import { Image } from "../../Interfaces";
import { useGetAllImagesQuery } from "../../API/imageApi";
import { ImageBlock, Loader } from "../../Components/Home";

function ImagesGallery() {
  const [images, setImages] = useState<Image[]>([]);
  const { data, isLoading } = useGetAllImagesQuery(null);

  useEffect(() => {
    if (data) {
      setImages(data?.result);
    }
  }, [data]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="fading-in text-center">
          <ImageBlock images={images} />
        </div>
      )}
    </>
  );
}

export default ImagesGallery;
