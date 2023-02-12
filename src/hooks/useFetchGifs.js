import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    setImages( await getGifs( category ) );
  }

  useEffect( () => {
    getImages();
    setIsLoading( false );
  }, []);

  return {
    isLoading,
    images
  }
}
