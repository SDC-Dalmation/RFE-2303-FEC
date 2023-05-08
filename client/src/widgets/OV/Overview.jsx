import React, {useState, useEffect}  from 'react';


function Overview({currentProduct}) {

  return(
    <div>
     Overview
     <p className="product-category">{currentProduct.category}</p>
     <h3 className="product-name">{currentProduct.name}</h3>
     <p className="product-price">{currentProduct.default_price}</p>
     <textarea cols="48" rows="6" name="body" defaultValue={currentProduct.description}></textarea>
    </div>
  )
}

export default Overview;