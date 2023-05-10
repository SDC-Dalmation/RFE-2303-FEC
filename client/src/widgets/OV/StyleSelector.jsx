import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Style from './Style.jsx';

function StyleSelector({currentProduct, setCurrentStyle, setAllProductStyles, allProductStyles}) {


  const styleBtnHandler = function() {
    return function(e) {
      e.preventDefault;
      alert('clicked it');
    }
  }

  return (
    <div>
      <div className="style-title" style={{'marginTop': '10px'}}>Styles</div>
      <div style={{'display': 'flex'}}>
        {allProductStyles.map((style, index) => (
          <Style style={style} key={index} styleBtnHandler={styleBtnHandler}/>
        ))}
      </div>
    </div>
  )
}

export default StyleSelector;