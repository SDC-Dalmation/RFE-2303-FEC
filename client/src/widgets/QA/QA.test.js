/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../../App';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import Question from './Question';
import QA from './QA';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { createPortal } from 'react-dom';

test('renders the landing page', () => {
  render(<App />);
});

test('question modal shows fields and a close button', () => {

  const handleClose = jest.fn();


  const {getByText} = render(
    <QuestionModal onClose={handleClose} productID={37311} />
  )

  expect(screen.getByText('Your Question:')).toBeTruthy();
  expect(screen.getByText('Your Display Name:')).toBeTruthy();
  expect(screen.getByText('For privacy reasons, do not use your full name or email address')).toBeTruthy();


  fireEvent.click(getByText(/Close Out/i));


  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('QA component displays header', async () => {

  const product = {
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
  };

  const testQuestion = {data : {results : [{"question_id":645638,"question_body":"New question for you!!","question_date":"2023-03-29T00:00:00.000Z","asker_name":"DJK","question_helpfulness":13,"reported":false,"answers":{"5991354":{"id":5991354,"body":"New answer for you!","date":"2023-03-29T00:00:00.000Z","answerer_name":"DJK","helpfulness":2,"photos":["https://res.cloudinary.com/dxbjpxspe/image/upload/v1680107782/benj/fcd6qeyiloxlknqhlrmg.png"]},"5991757":{"id":5991757,"body":"Will this product let me protect the krabby patty formula?","date":"2023-05-09T00:00:00.000Z","answerer_name":"Mr. Crabs","helpfulness":1,"photos":[]},"5991788":{"id":5991788,"body":"I have images","date":"2023-05-09T00:00:00.000Z","answerer_name":"imagemaster","helpfulness":0,"photos":[]},"5991789":{"id":5991789,"body":"I have answer","date":"2023-05-09T00:00:00.000Z","answerer_name":"asd","helpfulness":0,"photos":["C:\\fakepath\\bojack_background.jpg","C:\\fakepath\\RFE2302.png"]}}}]}};

  const otherTestQuestion = {
    data : {
      results : [{
        "question_id": 645638,
        "question_body": "New question for you!!",
        "question_date": "2023-03-29T00:00:00.000Z",
        "asker_name": "DJK",
        "question_helpfulness": 32,
        "reported": false,
        "answers": {
          "5991354": {
            "id": 5991354,
            "body": "New answer for you!",
            "date": "2023-03-29T00:00:00.000Z",
            "answerer_name": "DJK",
            "helpfulness": 46,
            "photos": [
              "https://res.cloudinary.com/dxbjpxspe/image/upload/v1680107782/benj/fcd6qeyiloxlknqhlrmg.png"
            ]
          },
          "5991757": {
            "id": 5991757,
            "body": "Will this product let me protect the krabby patty formula?",
            "date": "2023-05-09T00:00:00.000Z",
            "answerer_name": "Mr. Crabs",
            "helpfulness": 8,
            "photos": []
          },
          "5991788": {
            "id": 5991788,
            "body": "I have images",
            "date": "2023-05-09T00:00:00.000Z",
            "answerer_name": "imagemaster",
            "helpfulness": 1,
            "photos": []
          },
          "5991789": {
            "id": 5991789,
            "body": "I have answer",
            "date": "2023-05-09T00:00:00.000Z",
            "answerer_name": "asd",
            "helpfulness": 0,
            "photos": [
              "C:\\fakepath\\bojack_background.jpg",
              "C:\\fakepath\\RFE2302.png"
            ]
          }
        }
      }]
    }
  }

  jest.mock('axios');


  const mock = jest.spyOn(axios, "get");
  mock.mockImplementation(() => Promise.resolve(otherTestQuestion));

  // const mockLocal = jest.spyOn(localStorage, "setItem");
  // mockLocal.mockImplementation(return true);


  await act( async () => render(<QA currentProduct={product} />));

  // await(() => expect(screen.getByText('Questions & Answers')).toBeTruthy());
  expect(screen.getByText('Questions & Answers')).toBeTruthy();


});

test('QuestionList displays an answer to a question', () => {

  const results = [
    {
        "question_id": 645638,
        "question_body": "New question for you!!",
        "question_date": "2023-03-29T00:00:00.000Z",
        "asker_name": "DJK",
        "question_helpfulness": 11,
        "reported": false,
        "answers": {
            "5991354": {
                "id": 5991354,
                "body": "New answer for you!",
                "date": "2023-03-29T00:00:00.000Z",
                "answerer_name": "DJK",
                "helpfulness": 2,
                "photos": [
                    "https://res.cloudinary.com/dxbjpxspe/image/upload/v1680107782/benj/fcd6qeyiloxlknqhlrmg.png"
                ]
            },
            "5991757": {
                "id": 5991757,
                "body": "Will this product let me protect the krabby patty formula?",
                "date": "2023-05-09T00:00:00.000Z",
                "answerer_name": "Mr. Crabs",
                "helpfulness": 0,
                "photos": []
            }
        }
    },
    {
        "question_id": 645458,
        "question_body": "Will my loved ones be able see me with this camo? ",
        "question_date": "2023-03-24T00:00:00.000Z",
        "asker_name": "WeekendWarrior",
        "question_helpfulness": 8,
        "reported": false,
        "answers": {}
    },
]

  const handleClose = jest.fn();


  const {getByText} = render(
    <QuestionList questions={results} />
  )

  expect(screen.getByText('A: Will this product let me protect the krabby patty formula?')).toBeDefined();

});



// test('QA component allows Question modal to be used', async () => {

//   const product = {
//     "id": 37311,
//     "campus": "hr-rfe",
//     "name": "Camo Onesie",
//     "slogan": "Blend in to your crowd",
//     "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//     "category": "Jackets",
//     "default_price": "140.00",
//     "created_at": "2021-08-13T14:37:33.145Z",
//     "updated_at": "2021-08-13T14:37:33.145Z",
//     "features": [
//         {
//             "feature": "Fabric",
//             "value": "Canvas"
//         },
//         {
//             "feature": "Buttons",
//             "value": "Brass"
//         }
//     ]
//   };

//   const testQuestion = {data : {results : [{"question_id":645638,"question_body":"New question for you!!","question_date":"2023-03-29T00:00:00.000Z","asker_name":"DJK","question_helpfulness":13,"reported":false,"answers":{"5991354":{"id":5991354,"body":"New answer for you!","date":"2023-03-29T00:00:00.000Z","answerer_name":"DJK","helpfulness":2,"photos":["https://res.cloudinary.com/dxbjpxspe/image/upload/v1680107782/benj/fcd6qeyiloxlknqhlrmg.png"]},"5991757":{"id":5991757,"body":"Will this product let me protect the krabby patty formula?","date":"2023-05-09T00:00:00.000Z","answerer_name":"Mr. Crabs","helpfulness":1,"photos":[]},"5991788":{"id":5991788,"body":"I have images","date":"2023-05-09T00:00:00.000Z","answerer_name":"imagemaster","helpfulness":0,"photos":[]},"5991789":{"id":5991789,"body":"I have answer","date":"2023-05-09T00:00:00.000Z","answerer_name":"asd","helpfulness":0,"photos":["C:\\fakepath\\bojack_background.jpg","C:\\fakepath\\RFE2302.png"]}}}]}};

//   const otherTestQuestion = {
//     data : {
//       results : [{
//         "question_id": 645638,
//         "question_body": "New question for you!!",
//         "question_date": "2023-03-29T00:00:00.000Z",
//         "asker_name": "DJK",
//         "question_helpfulness": 32,
//         "reported": false,
//         "answers": {
//           "5991354": {
//             "id": 5991354,
//             "body": "New answer for you!",
//             "date": "2023-03-29T00:00:00.000Z",
//             "answerer_name": "DJK",
//             "helpfulness": 46,
//             "photos": [
//               "https://res.cloudinary.com/dxbjpxspe/image/upload/v1680107782/benj/fcd6qeyiloxlknqhlrmg.png"
//             ]
//           },
//           "5991757": {
//             "id": 5991757,
//             "body": "Will this product let me protect the krabby patty formula?",
//             "date": "2023-05-09T00:00:00.000Z",
//             "answerer_name": "Mr. Crabs",
//             "helpfulness": 8,
//             "photos": []
//           },
//           "5991788": {
//             "id": 5991788,
//             "body": "I have images",
//             "date": "2023-05-09T00:00:00.000Z",
//             "answerer_name": "imagemaster",
//             "helpfulness": 1,
//             "photos": []
//           },
//           "5991789": {
//             "id": 5991789,
//             "body": "I have answer",
//             "date": "2023-05-09T00:00:00.000Z",
//             "answerer_name": "asd",
//             "helpfulness": 0,
//             "photos": [
//               "C:\\fakepath\\bojack_background.jpg",
//               "C:\\fakepath\\RFE2302.png"
//             ]
//           }
//         }
//       }]
//     }
//   }

//   jest.mock('axios');

//   const user = userEvent.setup()


//   const mock = jest.spyOn(axios, "get");
//   mock.mockImplementation(() => Promise.resolve(otherTestQuestion));

//   const mockPost = jest.spyOn(axios, "post");
//   mockPost.mockImplementation(() => Promise.resolve());

//   const handleClose = jest.fn();


//   // render(<QuestionModal productID={product["id"]} onClose={handleClose}
//   // prodName={product["name"]}/>);
//   await act( async () => render(<QA currentProduct={product} />));

//   // await(() => expect(screen.getByText('Questions & Answers')).toBeTruthy());
//   let openModal = screen.getByRole('button', {
//     name: /add a Question/i
//   });

//   fireEvent.click(openModal);

//   expect(screen.getByText('Ask Your Question')).toBeTruthy();
//   expect(screen.getByPlaceholderText("Question...")).toBeTruthy();
//   expect(screen.getByPlaceholderText("Example: jackson11!")).toBeTruthy();
//   expect(screen.getByPlaceholderText("Example: abc1@abc.com")).toBeTruthy();

//   // user.type(screen.getByPlaceholderText("Question..."), "Yes, Test");

//   // user.type(screen.getByPlaceholderText("Example: jackson11!"), 'Name Testing');

//   // user.type(screen.getByPlaceholderText("Example: abc1@abc.com"), 'test@email.com');

//   // await fireEvent.submit(screen.getByTestId("form"));

//   // await expect(mockPost).toHaveBeenCalled();


// });