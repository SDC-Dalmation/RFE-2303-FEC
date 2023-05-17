import { render, screen, fireEvent, act } from '@testing-library/react';
import RelatedProductsCarousel from "./RelatedProductsCarousel.jsx";
import RelatedProductsEntry from "./RelatedProductsEntry.jsx";
import StarRatings from "react-star-ratings";
import axios from "axios"

describe(RelatedProductsCarousel, () => {
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
  const relatedProducts = [37311,37312,37315,37318]
  const setCurrentProduct = jest.fn();

  jest.mock('axios');

  const mock = jest.spyOn(axios, "get");
  mock.mockImplementation(() => Promise.resolve());

  test("renders RelatedProductsCarousel correctly", () => {
    const {queryByTestId} = render(<RelatedProductsCarousel currentProduct={currentProduct} relatedProducts={relatedProducts} setCurrentProduct={setCurrentProduct}/>)

    expect(queryByTestId('ProductsCarousel')).toBeTruthy();
  });

  test("left click button works on click", async () => {
    render(<RelatedProductsCarousel currentProduct={currentProduct} relatedProducts={relatedProducts} setCurrentProduct={setCurrentProduct}/>)

    const index = 2;
    const next = screen.getByRole('button', {name: '>'})

    await fireEvent.click(next)

    expect(index).toEqual(2)
  });
});