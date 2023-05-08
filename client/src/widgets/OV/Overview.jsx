import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';

function Overview({currentProduct}) {

  const [currentStyle, setCurrentStyle] = useState([]);
  const [allProductStyles, setAllProductStyles] = useState([]);


  if (currentProduct) {
    return(
      <div>
       Overview
       <ProductInfo currentProduct={currentProduct}/>
       <StyleSelector currentProduct={currentProduct} setCurrentStyle={setCurrentStyle} allProductStyles={allProductStyles} setAllProductStyles={setAllProductStyles}/>
      </div>
    )
  } else {
    return(
      <div>NO PRODUCT FOUND</div>
    )
  }
}

export default Overview;