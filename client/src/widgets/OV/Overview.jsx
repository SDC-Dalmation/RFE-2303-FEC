import React, {useState, useEffect}  from 'react';


function Overview({currentProduct}) {

  return(
    <div>
     Overview
     <p className="product-category">{currentProduct.category}</p>
     <h3 className="product-name">{currentProduct.name}</h3>
     <p className="product-price">{currentProduct.default_price}</p>
     <div className="product-description">{currentProduct.description}</div>
    </div>
  )
}

export default Overview;