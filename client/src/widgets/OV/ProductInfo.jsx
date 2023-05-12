import React, {useState, useEffect} from 'react';
import StarRatings from "react-star-ratings";

function ProductInfo({currentProduct, currentStyle, checkIfProductChangedArr}) {

  const [currentPrice, setCurrentPrice] = useState(currentProduct.default_price)

  useEffect(()=>{setCurrentPrice(currentProduct.default_price)}, checkIfProductChangedArr)

  return (
    <div>
      <p className="product-category">{currentProduct.category}</p>
      <h3 className="product-name">{currentProduct.name}</h3>
      <p>{currentProduct.slogan}</p>
      <p className="product-price">{currentPrice}</p>
      <div className="product-description">{currentProduct.description}</div>
    </div>
  )

}

export default ProductInfo;