import { render, screen, fireEvent } from '@testing-library/react';
import YourOutfits from "./YourOutfits.jsx";

describe(YourOutfits, () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  const currentProduct = {
    id: 37311,
    campus: 'hr-rfe',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-08-13T14:37:33.145Z',
    updated_at: '2021-08-13T14:37:33.145Z'
  }

  test("YourOutfits should be empty on start", () => {
    const setLocalStorage = (id, data) => {
      window.localStorage.setItem(id, JSON.stringify(data));
    };
    const {queryByTestId} = render(<YourOutfits currentProduct={currentProduct}/>)
    expect(localStorage.getItem('items')).toBe(JSON.stringify([]))
  });

  test("YourOutfits add currentProduct on click", () => {
    const setLocalStorage = (id, data) => {
      window.localStorage.setItem(id, JSON.stringify(data));
    };
    const {getByText} = render(<YourOutfits currentProduct={currentProduct}/>)
    fireEvent.click(getByText("+"))

    expect(localStorage.getItem('items')).toEqual(JSON.stringify([currentProduct]));
  });

});