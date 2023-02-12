/**
 * Function to bring an gifs array 
 * @param {String} category Topic of a gif
 * @returns {Array<Object>} gifs
 */
export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YIWqNq2xpTioo8SYStdM0t3PjdYeeT2o&q=${ category }&limit=10`;
  const resp = await fetch( url );
  const { data } = await resp.json(); 
  const gifs = data.map( ({ id, title, images }) => ({
      id,
      title,
      url: images.original.url
    })
  );
  // console.log(gifs);
  return gifs ;
}