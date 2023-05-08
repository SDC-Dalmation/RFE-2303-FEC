import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedProductsCarousel from "./relatedProductsCarousel.jsx";
import YourOutfits from "./YourOutfits.jsx";


const Outfit = ({products, currentProduct}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.post('/relatedProducts', {
      product_id: 37311
    })
      .then((relatedItems) => {
      setRelatedProducts(relatedItems.data);
    })
  }, [])
  console.log(relatedProducts);

  if (relatedProducts.length > 0) {

    return (
      <div>
        <>Related Products</>
        <RelatedProductsCarousel relatedProducts={relatedProducts} products={products}/>
        <>Your Outfit</>
        <YourOutfits/>
      </div>
    )
  } else {
    return (<div>Loading...</div>)
  }
};

export default Outfit;