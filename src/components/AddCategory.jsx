import { useState } from "react";
import  PropTypes  from 'prop-types';

export const AddCategory = ( {hola, onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('');

  /**
   * Función encargada para tener una referencia entre
   * la variable reactiva y un elemento HTML
   * @param {ChangeEvent} event 
   */
  const onInputChange = ( event ) => {
    // console.log( event.target.value );
    setInputValue( event.target.value );
  } 

  const onSubmit = ( event ) => { 
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    // console.log( inputValue ); 
    // setCategories( categories => [ inputValue, ...categories]);
    onNewCategory( inputValue );
    setInputValue( '' );
  }

  return (
    <form onSubmit={ onSubmit} aria-label="foorm">
      <input 
        type="text" 
        placeholder="Search a gif"
        value={ inputValue }
        onChange={onInputChange}   
      />
      <h6>{hola}</h6>
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}