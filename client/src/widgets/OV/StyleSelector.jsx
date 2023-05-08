import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Style from './Style.jsx';

function StyleSelector({currentProduct, setAllProductStyles, allProductStyles}) {

  useEffect(()=>{axios.post('/productStyles', {product_id: currentProduct.id}).then((res)=>{setAllProductStyles(res.data.results)})},[])

  const styleBtnHandler = function(e) {
    e.preventDefault;
    alert('clicked it');
  }

  if (currentProduct) {
    return (
      <div>
        <div className="style-title">Styles</div>
        {allProductStyles.map((style, index) => (
          <Style style={style} key={index} styleBtnHandler={styleBtnHandler}/>
        ))}
      </div>
    )
  } else {
      return (
        <div>NO PRODUCT FOUND - STYLESELECTOR</div>
      )
  }
}

export default StyleSelector;