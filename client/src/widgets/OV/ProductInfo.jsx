import React, {useState} from 'react';
import StarRatings from "react-star-ratings";

function ProductInfo({currentProduct, currentStyle}) {

  const [currentPrice, setCurrentPrice] = useState(currentProduct.default_price)

  console.log(currentStyle)

  return (
    <div>
      <p className="product-category">{currentProduct.category}</p>
      <h3 className="product-name">{currentProduct.name}</h3>
      <p className="product-price">{currentPrice}</p>
      <div className="product-description">{currentProduct.description}</div>
    </div>
  )

}

export default ProductInfo;