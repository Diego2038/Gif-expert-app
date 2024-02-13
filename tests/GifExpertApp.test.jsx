import { fireEvent, render, screen } from "@testing-library/react";

import { GifExpertApp } from "../src/GifExpertApp";
 
describe('test component <GifExpertApp/>', () => {

  test('should to match with the snapshot', () => {
    const { container } = render( <GifExpertApp />);
    screen.debug();
    expect( container ).toMatchSnapshot(); 
  });

  test('should to return more components when send an input event', () => {
    render( <GifExpertApp/> );
    const onNewCategory = jest.fn( () => {

    });
    const value = 'Dragon Ball';

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input( input, { target: { value }});
    fireEvent.submit( form );

    // screen.debug();
    const titles = screen.getAllByRole('heading', { level: 3});
    expect( titles.length).toBe(2);
  });

  test('don\'t should add a new category if a previous category exists', () => {
    render( <GifExpertApp /> );
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    const value = 'One punch';

    fireEvent.input( input, { target: { value }});
    fireEvent.submit( form );

    expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(1);
  })






});