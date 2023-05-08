import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';

function Overview({currentProduct}) {

  const [currentStyle, setCurrentStyle] = useState([]);
  const [allProductStyles, setAllProductStyles] = useState([]);

  axios.post('/productStyles', {product_id: currentProduct.id}).then((res)=>{console.log('styles:', res.data)})

  if (currentProduct) {
    return(
      <div>
       Overview
       <ProductInfo currentProduct={currentProduct} />
       <StyleSelector currentProduct={currentProduct} allProductStyles={allProductStyles} setAllProductStyles={setAllProductStyles}/>
      </div>
    )
  } else {
    return(
      <div>NO PRODUCT FOUND</div>
    )
  }
}

export default Overview;