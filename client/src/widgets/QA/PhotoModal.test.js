/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import PhotoModal from './PhotoModal';

test('photo modal gives option to add photos when count is less than 5', () => {

  const handleClose = jest.fn();

  const {getByText} = render(
    <PhotoModal onClose={handleClose} count={0} />
  )
  expect(screen.getByRole('button', {name: /Submit Photo/i})).toBeTruthy();


  fireEvent.click(getByText(/Close out/i))


  expect(handleClose).toHaveBeenCalledTimes(1)
});

test('photo modal does not let additional photo submission when count > 5', () => {

  const handleClose = jest.fn();

  const {getByText} = render(
    <PhotoModal onClose={handleClose} count={6} />
  )
  expect(screen.getByText('Photo Limit Reached')).toBeDefined();

});

test('user can upload photo when count < 5', async () => {

  const user = userEvent.setup()

  let handleClose, setPhotos, addedPhoto;
  let photos = [];
  handleClose = setPhotos = addedPhoto = jest.fn();

  const {getByText, queryByTestId} = render(
    <PhotoModal onClose={handleClose} count={0} setPhotos={setPhotos} addedPhoto={addedPhoto} photos={photos}/>
  )

  const files = new File(['hello'], 'hello.png', {type: 'image/png'});
  const input = screen.getByLabelText(/add a photo/i);

  await userEvent.upload(input, files);

  expect(input.files).toHaveLength(1)

  user.click(screen.getByRole('button', {name: /submit photo/i}));

  expect(() => screen.getByText(/Photo Limit Reached/i).toThrow());

});
