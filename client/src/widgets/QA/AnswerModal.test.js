/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, getByPlaceholderText } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import axios from 'axios';
import AnswerModal from './AnswerModal';

test('Answer modal renders', async () => {

  const handleClose = jest.fn();

  jest.mock('axios');


  const mock = jest.spyOn(axios, "post");
  mock.mockImplementation(() => Promise.resolve());

  const {getByText} = render(
    <AnswerModal questionID={37311} onClose={handleClose} productName={"Test Name"} questionBody={"Test question?"} />
  )

  const user = userEvent.setup()

  expect(screen.getByRole('button', {name: /Submit Answer/i})).toBeTruthy();

  expect(screen.getByPlaceholderText("Answer...")).toBeTruthy();
  expect(screen.getByPlaceholderText("Example: jackson11!")).toBeTruthy();
  expect(screen.getByPlaceholderText("Example: jack@email.com")).toBeTruthy();


  // fireEvent.change(screen.getByPlaceholderText("Answer..."), {
  //   target: {value: 'Yes, Test'},
  // });
  user.type(screen.getByPlaceholderText("Answer..."), "Yes, Test");

  user.type(screen.getByPlaceholderText("Example: jackson11!"), 'Name Testing');

  user.type(screen.getByPlaceholderText("Example: jack@email.com"), 'test@email.com');

  // fireEvent.change(screen.getByPlaceholderText("Example: jackson11!"), {
  //   target: {value: 'Name Testing'},
  // });
  // fireEvent.change(screen.getByPlaceholderText("Example: jack@email.com"), {
  //   target: {value: 'test@email.com'},
  // });

  // await fireEvent.submit(screen.getByTestId("form"));

  // await user.click((screen.getByRole('button', {name: /submit answer/i})))

  // await (() => user.click((screen.getByRole('button', {name: /submit answer/i}))));
  // await(() => expect(handleClose).toHaveBeenCalled());
  // await expect(handleClose).toHaveBeenCalled();

});