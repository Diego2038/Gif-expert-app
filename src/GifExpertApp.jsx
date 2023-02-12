import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'DBZ']);

  const onNewCategory = ( value ) => {
    // console.log( value );
    setCategories( categories => [ value, ...categories ] );
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
      categories.map( category => {
          return (<li key={ category }> {category} </li>)
        }) 
      }
      {/* <li>abc</li>  */}
    </ol>

    </>
  )
}
