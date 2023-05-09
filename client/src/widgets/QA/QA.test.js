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
