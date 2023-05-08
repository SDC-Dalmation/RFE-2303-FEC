import React, {useState} from "react";
import RelatedProductsEntry from "./RelatedProductsEntry.jsx"

const RelatedProductsCarousel = ({relatedProducts, products}) => {

  return (
    <div style={{display: 'flex', flexWrap: 'nowrap', overflow: 'hidden', flexDirection: 'row'}}>
      {relatedProducts.map((product, index) => (
        <RelatedProductsEntry key={index} product={product}/>
      ))}
    </div>
  )
}

export default RelatedProductsCarousel;