import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; 

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch']);

  const onNewCategory = ( newCategory ) => {
    if( categories.includes( newCategory ) ) return ;
    // console.log( value );
    setCategories( categories => [ newCategory, ...categories ] );
  }

  /* const onAddCategory = () => {
    // setCategories( category => category.push('pepe'));
    console.log('hola')
    setCategories( ( cat ) => ['pepe', ...cat]);
  } */
  
  return (
    <>
    {/* Título */}
      <h1>GifExpertApp</h1>
    
    {/* Input */}
    <AddCategory 
    hola='mundo' 
    // setCategories={ setCategories } 
    onNewCategory={onNewCategory}
    /> 

    {/* Listado de Gifs */}
      {/* Gif item */}
    <ol> 
      { 
      categories.map( category => (
        <GifGrid 
          key={ category }
          category={ category } /> 
      ))
    } 
    </ol>

    </>
  )
}
