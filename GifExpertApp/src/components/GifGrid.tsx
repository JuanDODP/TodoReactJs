import React, { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";
import { GifItem } from "./GifItem";
import { useFectchGifs } from "../hooks/useFectchGifs";

export const GifGrid = ({ Category }) => {
  console.log({ Category });
  const {images, isLoading}=useFectchGifs(Category)
  console.log("Las imagenes", images, {isLoading});
  if(isLoading){
    return <h1>Cargando...</h1>
  }
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
