import React, {useState} from "react";
import RelatedProductsEntry from "./RelatedProductsEntry.jsx"

const RelatedProductsCarousel = ({currentProduct, relatedProducts, setCurrentProduct}) => {
  return (
    <div data-testid="ProductsCarousel" style={{
      display: 'flex',
      flexWrap: 'nowrap',
      overflow: 'auto',
      flexDirection: 'row'}}>
      <button>
        {"<"}
      </button>
      {relatedProducts.map((product, index) => (
        <RelatedProductsEntry key={index} product={product} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct}/>
      ))}
      <button>
      {">"}
      </button>
    </div>
  )
}

export default RelatedProductsCarousel;