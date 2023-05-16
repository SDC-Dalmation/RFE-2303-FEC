import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Overview from '../Overview.jsx';

// !THIS DONT WORK FOR SOME REASON

// describe(Overview, ()=>{
//   test('renders Overview when current product is truthy', () => {

//     const currentProduct = {
//       id: 37311,
//       campus: 'hr-rfe',
//       name: 'Camo Onesie',
//       slogan: 'Blend in to your crowd',
//       description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
//       category: 'Jackets',
//       default_price: '140.00',
//       created_at: '2021-08-13T14:37:33.145Z',
//       updated_at: '2021-08-13T14:37:33.145Z'
//     }

//     render(
//       <Overview currentProduct={currentProduct} />
//     )

//     const overviewMain = screen.getByTestId('overviewMain');
//     expect(overviewMain).toBeTruthy();
//   });
// })