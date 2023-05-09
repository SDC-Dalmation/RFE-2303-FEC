import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import Outfit from "./Outfit.jsx"


describe(Outfit, () => {
  test("renders correctly when related products is empty", () => {
    const products = [
      {
        id: 37311,
        campus: 'hr-rfe',
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        category: 'Jackets',
        default_price: '140.00',
        created_at: '2021-08-13T14:37:33.145Z',
        updated_at: '2021-08-13T14:37:33.145Z'
      },
      {
        id: 37312,
        campus: 'hr-rfe',
        name: 'Bright Future Sunglasses',
        slogan: "You've got to wear shades",
        description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        category: 'Accessories',
        default_price: '69.00',
        created_at: '2021-08-13T14:37:33.145Z',
        updated_at: '2021-08-13T14:37:33.145Z'
      }
    ];

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
    const {queryByTestId} = render(<Outfit products={products} currentProduct={currentProduct} setCurrentProduct={Outfit.setCurrentProduct}/>);
    expect(queryByTestId('loadRender')).toBeTruthy();
    expect(queryByTestId('normalRender')).toBeNull();

  });
});