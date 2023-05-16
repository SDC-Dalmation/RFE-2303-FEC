import { render, screen, fireEvent } from '@testing-library/react';
import YourOutfitsEntry from "./YourOutfitsEntry.jsx";
import StarRatings from "react-star-ratings";
import axios from "axios";


describe(YourOutfitsEntry, () => {
  const item = {
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
  const items = [{
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
    },
    {
    "id": 37313,
    "campus": "hr-rfe",
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "100% Cotton"
        },
        {
            "feature": "Cut",
            "value": "Skinny"
        }
      ]
    }
  ]

  const productStyle = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80";

  const allRatingsObj = {
    1: "84",
    2: "59",
    3: "133",
    4: "160",
    5: "398"
  }

  jest.mock('axios');

  const mock = jest.spyOn(axios, "get");
  mock.mockImplementation(() => Promise.resolve(allRatingsObj));
  mock.mockImplementation(() => Promise.resolve(productStyle));

  const setItems = jest.fn();

  test("renders YourOutfitsEntry correctly", async () => {
    const {queryByTestId} = render(<YourOutfitsEntry item={item} items={items} setItems={setItems} />);

    await (expect(queryByTestId('YourOutfitsEntry')).toBeTruthy());
  });

  test("deletes item from YourOutfit carousel on click", async () => {
    const setLocalStorage = (id, data) => {
      window.localStorage.setItem(id, JSON.stringify(data));
    };
    const {getByText} = render(<YourOutfitsEntry item={item} items={items} setItems={setItems} />);

    fireEvent.click(getByText("X"))

    expect(localStorage.getItem('items')).toEqual(null);
  });
});