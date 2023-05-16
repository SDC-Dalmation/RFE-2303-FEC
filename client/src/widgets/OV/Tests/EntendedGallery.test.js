import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ExtendedGallery from '../ExtendedGallery.jsx';

describe(ExtendedGallery, ()=>{
  test('shouldnt show extended gallery if showModal is false', () => {


    const checkIfStyleChangedArr = [currentStyle]
    const currentStyle = {
      "style_id": 220998,
      "name": "Forest Green & Black",
      "original_price": "140.00",
      "sale_price": null,
      "default?": true,
      "photos": [
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          }
      ],
      "skus": {
          "1281032": {
              "quantity": 8,
              "size": "XS"
          },
          "1281033": {
              "quantity": 16,
              "size": "S"
          },
          "1281034": {
              "quantity": 17,
              "size": "M"
          },
          "1281035": {
              "quantity": 10,
              "size": "L"
          },
          "1281036": {
              "quantity": 15,
              "size": "XL"
          },
          "1281037": {
              "quantity": 4,
              "size": "XL"
          }
      }
  }
    const handleExtendedBtn = jest.fn();
    const showModal = false;
    const handlePicBtn = jest.fn();
    const mainGalleryPic = currentStyle.photos[0].url
    const setMainGalleryPic = jest.fn()
    const rangeOfGallery = 7
    const setRangeOfGallery = jest.fn()
    const indexOfGallery = [0,6]
    const setIndexOfGallery = jest.fn()
    const setCurrentlySelected = jest.fn()
    const currentlySelected = 0;

    render(
    <ExtendedGallery handleExtendedBtn={handleExtendedBtn} showModal={showModal} currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic} checkIfStyleChangedArr={checkIfStyleChangedArr} rangeOfGallery={rangeOfGallery} setRangeOfGallery={setRangeOfGallery} indexOfGallery={indexOfGallery} setIndexOfGallery={setIndexOfGallery} setCurrentlySelected={setCurrentlySelected} currentlySelected={currentlySelected} setMainGalleryPic={setMainGalleryPic}/>
    )

    const extendedGalleryMain = screen.queryByTestId('extendedGalleryMain');
    expect(extendedGalleryMain).toBeFalsy();
  });

  test('should show extended gallery if showModal is true', () => {


    const checkIfStyleChangedArr = [currentStyle]
    const currentStyle = {
      "style_id": 220998,
      "name": "Forest Green & Black",
      "original_price": "140.00",
      "sale_price": null,
      "default?": true,
      "photos": [
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          },
          {
              "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          }
      ],
      "skus": {
          "1281032": {
              "quantity": 8,
              "size": "XS"
          },
          "1281033": {
              "quantity": 16,
              "size": "S"
          },
          "1281034": {
              "quantity": 17,
              "size": "M"
          },
          "1281035": {
              "quantity": 10,
              "size": "L"
          },
          "1281036": {
              "quantity": 15,
              "size": "XL"
          },
          "1281037": {
              "quantity": 4,
              "size": "XL"
          }
      }
  }
    const handleExtendedBtn = jest.fn();
    const showModal = true;
    const handlePicBtn = jest.fn();
    const mainGalleryPic = currentStyle.photos[0].url
    const setMainGalleryPic = jest.fn()
    const rangeOfGallery = 7
    const setRangeOfGallery = jest.fn()
    const indexOfGallery = [0,6]
    const setIndexOfGallery = jest.fn()
    const setCurrentlySelected = jest.fn()
    const currentlySelected = 0;

    render(
    <ExtendedGallery handleExtendedBtn={handleExtendedBtn} showModal={showModal} currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic} checkIfStyleChangedArr={checkIfStyleChangedArr} rangeOfGallery={rangeOfGallery} setRangeOfGallery={setRangeOfGallery} indexOfGallery={indexOfGallery} setIndexOfGallery={setIndexOfGallery} setCurrentlySelected={setCurrentlySelected} currentlySelected={currentlySelected} setMainGalleryPic={setMainGalleryPic}/>
    )

    const extendedGalleryMain = screen.getByTestId('extendedGalleryMain');
    expect(extendedGalleryMain).toBeTruthy();
  });

})