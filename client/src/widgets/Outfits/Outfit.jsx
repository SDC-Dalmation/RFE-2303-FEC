import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedProductsCarousel from "./relatedProductsCarousel.jsx";
import YourOutfits from "./YourOutfits.jsx";


const Outfit = ({products, currentProduct, setCurrentProduct}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);


  useEffect(() => {
    axios.post('/relatedProducts', {
      product_id: currentProduct.id
    })
      .then((relatedItems) => {
      setRelatedProducts(relatedItems.data);
    })
  }, [currentProduct])

  if (relatedProducts.length > 0) {

    return (
      <div data-testid="normalRender" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <br></br>
        <>Related Products</>
        <br></br>
        <div style={{
          display: 'flex',
          border: '1px solid black',
          borderRadius: 3,
          padding: 5,
          width: '50%',
          justifyContent: 'center',
          }}>
        <RelatedProductsCarousel currentProduct={currentProduct} relatedProducts={relatedProducts} setCurrentProduct={setCurrentProduct}/>
        </div>
        <br></br>
        <>Your Outfit</>
        <br></br>
        <div style={{
          display: 'flex',
          border: '1px solid black',
          borderRadius: 3,
          padding: 5,
          width: '50%',
          justifyContent: 'center',
          }}>
        <YourOutfits currentProduct={currentProduct}/>
        </div>
      </div>
    )
  } else {
    return (<div data-testid="loadRender">Loading...</div>)
  }
};

export default Outfit;