import { render, screen, fireEvent } from '@testing-library/react';
import RelatedProductsEntry from "./RelatedProductsEntry.jsx";
import StarRatings from "react-star-ratings";
import axios from "axios";

describe(RelatedProductsEntry, () => {
  const product = 37312
  const setCurrentProduct = jest.fn();
  const currentProduct = 37311;
  const oldProduct = 37311;
  const setOldProduct =jest.fn();
  const allRatingsObj = {
    1: "84",
    2: "59",
    3: "133",
    4: "160",
    5: "398"
  }

  const productStyle = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80";

  const productInfo = {
    "id": 37311,
    "campus": "hr-rfe",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
      ]
  }

  jest.mock('axios');

  const mock = jest.spyOn(axios, "get");
  mock.mockImplementation(() => Promise.resolve(allRatingsObj));
  mock.mockImplementation(() => Promise.resolve(productStyle));
  mock.mockImplementation(() => Promise.resolve(productInfo));

  test("renders correctly RelatedProductsEntry", async () => {
    const {queryByTestId} = render(<RelatedProductsEntry product={product} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} oldProduct={oldProduct} setOldProduct={setOldProduct}/>);

    await (expect(queryByTestId('inStock')).toBeTruthy());
    await (expect(queryByTestId('soldOut')).toBeNull());
  });
});