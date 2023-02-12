import { useState } from "react"

export const AddCategory = ( {hola, setCategories } ) => {

  const [inputValue, setInputValue] = useState('One punch');

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
    setCategories( categories => [ inputValue, ...categories]);
    setInputValue( '' );
  }

  return (
    <form onSubmit={ onSubmit}>
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
