const { render, screen, fireEvent } = require("@testing-library/react")
const { AddCategory } = require("../../src/components/AddCategory")


describe('test component <AddCategory/>', () => {

  

  test('should to change the text box value', () => {
    const value = 'Saitama';
    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');
    fireEvent.change( input, { target: { value } });
    expect( input.value ).toBe( value );
  });

  test('should call for onNewCategory if the input has a value', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
    // TODO: ??
    
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole('textbox');  
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue }});
    fireEvent.submit( form );

    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toBeCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

  });

  test('shouldn\'t call function onNewCategory if the input is empty', () => { 

    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } />);
    
    const form = screen.getByRole('form'); 
    fireEvent.submit( form );
    
    expect( onNewCategory ).toBeCalledTimes(0);

  });

})