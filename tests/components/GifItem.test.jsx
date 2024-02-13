import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('test component GifItem', () => { 

  const title = 'Title # 1';
  const url = 'https://www.google.com/';

  test('should to match with the snapshot', () => { 
    const { container } = render( <GifItem key={'13'} title={title} url={url} />);

    expect( container ).toMatchSnapshot();
  });

  test('should to show the image with its respective alt and url', () => {
    render( <GifItem url={url} title={title} />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img' );
    
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  test('should to show the title in the component', () => {
    render( <GifItem url={url} title={title} /> );
    expect( screen.getByText( title ) ).toBeTruthy();
  })

});