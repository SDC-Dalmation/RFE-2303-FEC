/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import Question from './Question';
import QA from './QA';

test('renders the landing page', () => {
  render(<App />);
});

test('question modal shows fields and a close button', () => {

  const handleClose = jest.fn();


  const {getByText} = render(
    <QuestionModal onClose={handleClose} productID={37311} />
  )

  expect(screen.getByLabelText('Your Question:')).toBeTruthy();
  expect(screen.getByLabelText('Your Display Name:')).toBeTruthy();
  expect(screen.getByText('For privacy reasons, do not use your full name or email address')).toBeTruthy();


  fireEvent.click(getByText(/Close Out/i))


  expect(handleClose).toHaveBeenCalledTimes(1)
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