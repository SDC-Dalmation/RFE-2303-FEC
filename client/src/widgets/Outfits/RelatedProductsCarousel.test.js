import { render, screen, fireEvent } from '@testing-library/react';
import RelatedProductsCarousel from "./RelatedProductsCarousel.jsx";
import RelatedProductsEntry from "./RelatedProductsEntry.jsx"

describe(RelatedProductsCarousel, () => {
  test("renders RelatedProductsEntry correctly", () => {
    const relatedProducts = [37311,37312,37315,37318]
    const setProduct = jest.fn();
    const {queryByTestId} = render(<RelatedProductsCarousel relatedProducts={relatedProducts} setCurrentProduct={setProduct}/>)

    expect(queryByTestId("ProductsCarousel")).toBeTruthy();
  });
});