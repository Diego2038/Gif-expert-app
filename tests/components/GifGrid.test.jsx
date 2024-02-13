import { GifGrid } from "../../src/components/GifGrid";
import { render, screen, fireEvent } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs");

describe('test component <GifGrid/>', () => {
  const category = 'One Punch';

  test('should show the comment "isLoading" in the start', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render( <GifGrid category={ category}/> );  
    expect( screen.getByText('Cargando...'));
    expect( screen.getByText( category ));
  });

  test('should to show the items when the page load the images by the hook useFetchGifs ', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://google.edu.co/saitama.jpg'
      },
      {
        id: '123',
        title: 'Naruto',
        url: 'https://google.edu.co/naruto.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })

    render( <GifGrid category={ category }/> );
    // screen.debug();

    expect( screen.getAllByRole('img').length ).toBe( gifs.length );

  });

});