import { render, screen, fireEvent } from '@testing-library/react';
import CompareModal from "./CompareModal.jsx";
import axios from "axios";

describe(CompareModal, () => {
  const showModal = false;
  const setShowModal = jest.fn();
  const product = 37313;
  const oldProduct = {
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
  const oldCharacteristics = Object.entries({
    "Fit": {
        "id": 125031,
        "value": "3.1189189189189189"
    },
    "Length": {
        "id": 125032,
        "value": "3.1566901408450704"
    },
    "Comfort": {
        "id": 125033,
        "value": "3.2825688073394495"
    },
    "Quality": {
        "id": 125034,
        "value": "3.2937853107344633"
    }
  })

  const currentCharacteristics = Object.entries({
    "Fit": {
        "id": 125036,
        "value": "2.5934065934065934"
    },
    "Length": {
        "id": 125037,
        "value": "2.7341772151898734"
    },
    "Comfort": {
        "id": 125038,
        "value": "2.7951807228915663"
    },
    "Quality": {
        "id": 125039,
        "value": "2.8863636363636364"
    }
})

  const currentProductName = "Morning Joggers"


  jest.mock('axios');

  const mock = jest.spyOn(axios, "get");
  mock.mockImplementation(() => Promise.resolve(currentCharacteristics));
  mock.mockImplementation(() => Promise.resolve(oldCharacteristics));
  mock.mockImplementation(() => Promise.resolve(totalCharacteristics));
  mock.mockImplementation(() => Promise.resolve(currentProductName));

  test("renders correctly Compare modal", async () => {
    const {queryByTestId} = render(<CompareModal showModal={showModal} setShowModal={setShowModal} product={product} oldProduct={oldProduct}/>);

    await (expect(queryByTestId('CompareModal')).toBeTruthy());
  });
});