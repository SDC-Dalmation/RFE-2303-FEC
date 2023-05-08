import React, {useState} from "react";
import RelatedProductsEntry from "./RelatedProductsEntry.jsx"

const RelatedProductsCarousel = ({relatedProducts, products}) => {
  const message = () => {
    alert(`Stop clicking me! I'm not finished >:(`)
  }

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'nowrap',
      overflow: 'hidden',
      flexDirection: 'row'}} onClick={() => message()}>
      <button>
        {"<"}
      </button>
      {relatedProducts.map((product, index) => (
        <RelatedProductsEntry key={index} product={product}/>
      ))}
      <button>
      {">"}
      </button>
    </div>
  )
}

export default RelatedProductsCarousel;