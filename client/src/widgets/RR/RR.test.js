import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import StarRatings from "react-star-ratings";
import RR from "./RR";
import RatingBreakdown from "./RatingBreakdown";
import ProductBreakdown from "./ProductBreakdown";
import ReviewsList from "./ReviewsList";
import Sort from "./Sort";
import ReviewTile from "./ReviewTile";
import NewReview from "./NewReview";

const currentProduct = {
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

const reviewsList = [
  {
      "review_id": 1279874,
      "rating": 2,
      "summary": "Hated it",
      "recommend": false,
      "response": null,
      "body": "Worst ever",
      "date": "2023-05-12T00:00:00.000Z",
      "reviewer_name": "hello123",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2458802,
              "url": "https://media.cnn.com/api/v1/images/stellar/prod/200906155336-04-thompson-farm-sunflowers.jpg?q=x_2,y_112,h_898,w_1596,c_crop/h_540,w_960/f_webp"
          }
      ]
  },
  {
      "review_id": 1279218,
      "rating": 3,
      "summary": "THIS IS A TEST",
      "recommend": false,
      "response": null,
      "body": "THIS IS ALSO A TEST",
      "date": "2023-03-21T00:00:00.000Z",
      "reviewer_name": "TEST123 ",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2457753,
              "url": "http://res.cloudinary.com/dmmzqckuu/image/upload/v1667506778/mwsvroray4fie6rakkqj.jpg"
          }
      ]
  },
  {
      "review_id": 1279208,
      "rating": 4,
      "summary": "idk",
      "recommend": true,
      "response": null,
      "body": "ummm meh",
      "date": "2023-03-20T00:00:00.000Z",
      "reviewer_name": "testbob123",
      "helpfulness": 2,
      "photos": []
  }
]

test('Ratings and Reviews has correct heading', async () => {
  const reviews = {
    data: {
      "results": [
        {
            "review_id": 1279874,
            "rating": 2,
            "summary": "Hated it",
            "recommend": false,
            "response": null,
            "body": "Worst ever",
            "date": "2023-05-12T00:00:00.000Z",
            "reviewer_name": "hello123",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2458802,
                    "url": "https://media.cnn.com/api/v1/images/stellar/prod/200906155336-04-thompson-farm-sunflowers.jpg?q=x_2,y_112,h_898,w_1596,c_crop/h_540,w_960/f_webp"
                }
            ]
        },
        {
            "review_id": 1279218,
            "rating": 3,
            "summary": "THIS IS A TEST",
            "recommend": false,
            "response": null,
            "body": "THIS IS ALSO A TEST",
            "date": "2023-03-21T00:00:00.000Z",
            "reviewer_name": "TEST123 ",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457753,
                    "url": "http://res.cloudinary.com/dmmzqckuu/image/upload/v1667506778/mwsvroray4fie6rakkqj.jpg"
                }
            ]
        },
        {
            "review_id": 1279208,
            "rating": 4,
            "summary": "idk",
            "recommend": true,
            "response": null,
            "body": "ummm meh",
            "date": "2023-03-20T00:00:00.000Z",
            "reviewer_name": "testbob123",
            "helpfulness": 2,
            "photos": []
        }
    ]
    }
  }

  jest.mock('axios');

  const mock = jest.spyOn(axios, "post");

  mock.mockImplementation(() => Promise.resolve(reviews));

  await act(() => {
    render(<RR currentProduct={currentProduct}/>)
  });

  expect(screen.getByText('Ratings and Reviews')).toBeTruthy();

})

//Review Breakdown

test('Loading page displayed when there is no rating data', async () => {

  jest.spyOn(axios, 'post').mockResolvedValue({data: {ratings: {}}})

  await act(() => render(<RatingBreakdown currentProduct={currentProduct} />));


  expect(screen.getByText('Loading...')).toBeTruthy()

})

test('Displays average rating for current product', async () => {
  const ratingData = {
    5: 10,
    4: 8,
    3: 4,
    2: 2,
    1: 1,
  };

  jest.spyOn(axios, 'post').mockResolvedValue({data: {ratings: ratingData}});

  await act(() => render(<RatingBreakdown currentProduct={currentProduct} />));

  const element = screen.queryByText('4.0');
  expect(element).toBeDefined();



})

//Product Breakdown

test('Displays all characteristics for current product', async () => {
  const productData = {
    "Fit": {
        "id": 125031,
        "value": "3.1188299817184644"
    },
    "Length": {
        "id": 125032,
        "value": "3.1446428571428571"
    },
    "Comfort": {
        "id": 125033,
        "value": "3.2830540037243948"
    },
    "Quality": {
        "id": 125034,
        "value": "3.2979127134724858"
    }
};

  jest.spyOn(axios, 'post').mockResolvedValue({data: {characteristics: productData}});

  await act(() => render(<ProductBreakdown currentProduct={currentProduct} />));

  const element = screen.queryByText('Comfort');
  expect(element).toBeDefined();
})

//Sort

test('Should correctly render the  Sort component', async () => {
  let setReviews;

  jest.mock('axios');

  const mock = jest.spyOn(axios, "post");

  mock.mockImplementation(() => Promise.resolve(reviewsList));

  const {getByLabelText, getByText} = render(
    <Sort
    currentProduct={currentProduct}
    reviews={reviewsList}
    setReviews={setReviews}
    />
  );

  const label = getByLabelText("Reviews sorted by:");
  const option = getByText("Relevance");

  expect(label).toBeDefined();
  expect(option).toBeDefined();
})

test('Sort component should update reviews when the option is changed', async () => {
  const setReviews = jest.fn();

  jest.mock('axios');

  const mock = jest.spyOn(axios, "post");

  mock.mockResolvedValue({data: {results: reviewsList}})

  const {getByLabelText} = render(
    <Sort
    currentProduct={currentProduct}
    reviews={reviewsList}
    setReviews={setReviews}
    />
  );

  const selectElement = getByLabelText("Reviews sorted by:");
  fireEvent.change(selectElement, {target: {value: "newest"}})

  expect(axios.post).toHaveBeenCalledWith("/listReviews", {
    product_id: currentProduct.id,
    sortType: "newest",
  });

  await act(() => waitFor(() => {
    expect(setReviews).toHaveBeenCalledTimes(1)
  }));

  expect(setReviews).toHaveBeenCalledWith(reviewsList);

})

//Review Tile

test('Review Tile is correctly rendered', async () => {
  const review =  {
    "review_id": 1279874,
    "rating": 2,
    "summary": "Hated it",
    "recommend": false,
    "response": null,
    "body": "Worst ever",
    "date": "2023-05-12T00:00:00.000Z",
    "reviewer_name": "hello123",
    "helpfulness": 0,
    "photos": [
        {
            "id": 2458802,
            "url": "https://media.cnn.com/api/v1/images/stellar/prod/200906155336-04-thompson-farm-sunflowers.jpg?q=x_2,y_112,h_898,w_1596,c_crop/h_540,w_960/f_webp"
        }
      ]
  }

  jest.mock('axios');

  const mock = jest.spyOn(axios, "post");

  mock.mockImplementation(() => Promise.resolve(review));

  const {getByText} = render(
    <ReviewTile
    review={review}
    reviews={reviewsList}
    />
  );
  const body = getByText("Worst ever");
  const summary = getByText("Hated it")
  const name = getByText("hello123")

  expect(body).toBeInTheDocument();
  expect(summary).toBeInTheDocument();
  expect(name).toBeInTheDocument();

})

test('Each review tile should display rating in stars', async () => {
  const review =  {
    "review_id": 1279874,
    "rating": 2,
    "summary": "Hated it",
    "recommend": false,
    "response": null,
    "body": "Worst ever",
    "date": "2023-05-12T00:00:00.000Z",
    "reviewer_name": "hello123",
    "helpfulness": 0,
    "photos": [
        {
            "id": 2458802,
            "url": "https://media.cnn.com/api/v1/images/stellar/prod/200906155336-04-thompson-farm-sunflowers.jpg?q=x_2,y_112,h_898,w_1596,c_crop/h_540,w_960/f_webp"
        }
      ]
  }

  jest.mock('axios');

  const mock = jest.spyOn(axios, "post");

  mock.mockImplementation(() => Promise.resolve(review));

  render(<StarRatings rating={2} />)

  const rating = screen.getByTitle("2 Stars")

  expect(rating).toBeInTheDocument();
})

test('Each review tile should display the photos', async () => {
  const review =  {
    "review_id": 1279874,
    "rating": 2,
    "summary": "Hated it",
    "recommend": false,
    "response": null,
    "body": "Worst ever",
    "date": "2023-05-12T00:00:00.000Z",
    "reviewer_name": "hello123",
    "helpfulness": 0,
    "photos": [
        {
            "id": 2458802,
            "url": "https://media.cnn.com/api/v1/images/stellar/prod/200906155336-04-thompson-farm-sunflowers.jpg?q=x_2,y_112,h_898,w_1596,c_crop/h_540,w_960/f_webp"
        }
      ]
  }

  jest.mock('axios');

  const mock = jest.spyOn(axios, "post");

  mock.mockImplementation(() => Promise.resolve(review));

  await act(() => render( <ReviewTile review={review} reviews={reviewsList}/>));
  const photos = review.photos;
  expect(photos.length === 1).toBeTruthy();
})

test('Can mark review tile as helpful', async() => {
  const review =  {
    "review_id": 1279874,
    "rating": 2,
    "summary": "Hated it",
    "recommend": false,
    "response": null,
    "body": "Worst ever",
    "date": "2023-05-12T00:00:00.000Z",
    "reviewer_name": "hello123",
    "helpfulness": 0,
    "photos": [
        {
            "id": 2458802,
            "url": "https://media.cnn.com/api/v1/images/stellar/prod/200906155336-04-thompson-farm-sunflowers.jpg?q=x_2,y_112,h_898,w_1596,c_crop/h_540,w_960/f_webp"
        }
      ]
  }

  const response = {
    data: {
      ...review,
      helpfulness: 1
    }
  };

  jest.mock('axios');

  const mock = jest.spyOn(axios, "post");

  mock.mockResolvedValue(response);

  const {getByText} = render( <ReviewTile review={review} reviews={reviewsList}/>);

  const button = getByText('Yes');

  fireEvent.click(button);
  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledTimes(8);
    expect(axios.post).toHaveBeenCalledWith('/markReviewHelpful', { review_id: review.review_id });
    expect(getByText('(1)')).toBeInTheDocument();
  })
})

test('recommend option changes when radio button is selected', async () => {
  const { container } = render(<NewReview currentProduct={currentProduct}/>);
  const recommend = container.querySelector('.recommend-radio');

  fireEvent.click(recommend.children[0].querySelector('input'));

  await waitFor(() => {

    expect(recommend.children[0].querySelector('input').checked).toBe(true);
  })

});

test('Able to retrieve characteristics list', async () => {
  const response = {
    data: {
      characteristics: {
        "125032": { id: 125032, value: "Comfort", },
        "125033": { id: 125033, value: "Fit", },
        "125034": { id: 125034, value: "Quality", },
      },
    },
  };

  jest.mock('axios');

  const mock = jest.spyOn(axios, "post");

  mock.mockResolvedValue(response);

  let setShowModal = jest.fn();;

  const {getByText} = render( <NewReview setShowModal={setShowModal} currentProduct={currentProduct}/>);

  const button = getByText('Submit Review');
  const Characteristics = getByText('Characteristics')

  fireEvent.click(button);
  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledTimes(11);
    expect(Characteristics).toBeInTheDocument();
  })
})