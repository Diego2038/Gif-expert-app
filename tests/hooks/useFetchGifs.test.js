
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test function hook UseFetch()', () => {

  test('should to return the initial value', () => {
    const { result } = renderHook(() => useFetchGifs('Peppa Pig') );
    const { images, isLoading } = result.current;
    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('should to return the images array value and false in isLoading', async () => {
    const { result } = renderHook( () => useFetchGifs('One Punch'));

    await waitFor(() => {
      expect( result.current.images.length ).toBeGreaterThan(0);
    },
    {
      timeout: 2000
    });

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();

  });
  
});