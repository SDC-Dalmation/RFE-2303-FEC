import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Style from './Style.jsx';

function StyleSelector({currentProduct, setCurrentStyle, setAllProductStyles, allProductStyles}) {


  // when the page renders, grab all the styles for this product and set the current style to be the first style in the list
  useEffect(()=>{axios.post('/productStyles', {product_id: currentProduct.id}).then((res)=>{setAllProductStyles(res.data.results); setCurrentStyle(res.data.results[0])})},[])

  const styleBtnHandler = function() {
    return function(e) {
      e.preventDefault;
      alert('clicked it');
    }
  }

  return (
    <div>
      <div className="style-title">Styles</div>
      {allProductStyles.map((style, index) => (
        <Style style={style} key={index} styleBtnHandler={styleBtnHandler}/>
      ))}
    </div>
  )
}

export default StyleSelector;