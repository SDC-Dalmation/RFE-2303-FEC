import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedProductsCarousel from "./relatedProductsCarousel.jsx";
import YourOutfits from "./YourOutfits.jsx";


const Outfit = ({products, currentProduct}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsArray, setRelatedProductsArray] = useState([]);

  useEffect(() => {
    axios.post('/relatedProducts', {
      product_id: 37311
    })
      .then((relatedItems) => {
      setRelatedProducts(relatedItems.data);
    })
  }, [])

  if (relatedProducts.length > 0) {

    return (
      <div>
        <br></br>
        <>Related Products</>
        <br></br>
        <RelatedProductsCarousel relatedProducts={relatedProducts} products={products}/>
        <br></br>
        <>Your Outfit</>
        <br></br>
        <YourOutfits currentProduct={currentProduct}/>
      </div>
    )
  } else {
    return (<div>Loading...</div>)
  }
};

export default Outfit;