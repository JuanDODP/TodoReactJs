import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGif';

export const useFectchGifs = (Category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);
  const getImges = async () => {
    const newImages = await getGif(Category);
    setimages(newImages);
    setisLoading(false)
  };
  useEffect(() => {
    // getGif(Category);
    getImges();
    // console.log({Category})
  }, []);
 return {
    images,
    isLoading
 }
}
