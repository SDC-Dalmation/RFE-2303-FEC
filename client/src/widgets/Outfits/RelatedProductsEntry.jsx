import React from "react";

const RelatedProductsEntry = ({product}) => {
  return (
    <div style={{
      border: '1px solid grey',
      padding: 100}}>
      {product}
    </div>
  )
}

export default RelatedProductsEntry;