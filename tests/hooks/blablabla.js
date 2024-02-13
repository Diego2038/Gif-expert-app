
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('test hook useFetchGifs()', () => {

  test('should return the initial state', () => {
    const { result } = renderHook( () => useFetchGifs('One Punch'));
    const { isLoading, images } = result.current;

    // console.log( images );
    expect( images.length ).toBe( 0 );
    expect( isLoading ).toBe( true );


  }); 

  test('should return an images array and isLoading in true', async () => {

    const { result } = renderHook( () => useFetchGifs('One Punch'));

    await waitFor(() => {
      expect( result.current.images.length ).toBeGreaterThan( 0 );
    }, { timeout: 2000} ); // ! Por si necesitas que espere un tiempo determinado

    const { images, isLoading } = result.current;
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();


  });

});