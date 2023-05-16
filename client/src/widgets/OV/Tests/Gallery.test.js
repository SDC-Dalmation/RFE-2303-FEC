import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Gallery from '../Gallery.jsx';

describe(Gallery, ()=>{
  test('renders main gallery when current product & style is given', () => {

    const currentProduct = {
      id: 37311,
      campus: 'hr-rfe',
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140.00',
      created_at: '2021-08-13T14:37:33.145Z',
      updated_at: '2021-08-13T14:37:33.145Z'
    }

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
    const checkIfProductChangedArr = [currentProduct]
    const checkIfStyleChangedArr = [currentStyle]
    const mainGalleryPic = currentStyle.photos[0].url
    const setMainGalleryPic = jest.fn()

    render(
      <Gallery currentProduct={currentProduct} currentStyle={currentStyle} mainGalleryPic={mainGalleryPic} setMainGalleryPic={setMainGalleryPic} checkIfProductChangedArr={checkIfProductChangedArr} checkIfStyleChangedArr={checkIfStyleChangedArr}/>
    )

    const mainGallery = screen.getByTestId('mainGallery');
    expect(mainGallery).toBeTruthy();
  });
})