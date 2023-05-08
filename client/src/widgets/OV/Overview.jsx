import React, {useState, useEffect}  from 'react';
import ProductInfo from './ProductInfo.jsx';

function Overview({currentProduct}) {

  return(
    <div>
     Overview
     <ProductInfo currentProduct={currentProduct} />
    </div>
  )
}

export default Overview;