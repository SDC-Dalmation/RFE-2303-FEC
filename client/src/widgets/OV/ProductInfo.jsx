import React, {useState, useEffect} from 'react';
import StarRatings from "react-star-ratings";

function ProductInfo({currentProduct, currentStyle, checkIfProductChangedArr, checkIfStyleChangedArr}) {

  const [currentPrice, setCurrentPrice] = useState(currentProduct.default_price)
  const [hasSale, setHasSale] = useState(false)

  useEffect(()=>{setCurrentPrice(currentProduct.default_price)}, checkIfProductChangedArr)
  useEffect(()=>{ if (currentStyle.sale_price) {setHasSale(true); setCurrentPrice(currentStyle.sale_price)} else {setCurrentPrice(currentStyle.original_price); setHasSale(false)}}, checkIfStyleChangedArr)

  console.log(currentStyle)

  return (
    <div>
      <p className="product-category">{currentProduct.category}</p>
      <h3 className="product-name">{currentProduct.name}</h3>
      <p>{currentProduct.slogan}</p>
      {hasSale ? <div><strike >{currentStyle.original_price}</strike> <p style={{'color': 'red'}}>{currentPrice}</p></div> : <p>{currentPrice}</p>}
      <div className="product-description">{currentProduct.description}</div>
    </div>
  )

}

export default ProductInfo;