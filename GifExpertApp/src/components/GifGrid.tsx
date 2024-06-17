import React, { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ Category }) => {
  console.log({ Category });
  const [images, setimages] = useState([]);
  const getImges = async () => {
    const newImages = await getGif(Category);
    setimages(newImages);
  };
  useEffect(() => {
    // getGif(Category);
    getImges();
    // console.log({Category})
  }, []);
  console.log("Las imagenes", images);
  return (
    <>
      <h3>{Category}</h3>
      <div className="card-grid">
        {images.map(({id, title, uriImage}) => (
            <GifItem key={id}
            title={title}
            id={id}
            url={uriImage}
            />
        )
          
          
        )}
      </div>
    </>
  );
};
