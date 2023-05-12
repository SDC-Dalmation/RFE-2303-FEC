import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Style from './Style.jsx';

function StyleSelector({currentProduct, setCurrentStyle, setAllProductStyles, allProductStyles}) {


  const styleBtnHandler = function(index) {
    return function(e) {
      e.preventDefault;
      setCurrentStyle(allProductStyles[index])
    }
  }

  return (
    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
      <p style={{'fontWeight': '700'}}>Styles</p>
      <div style={{'marginTop': '10px', 'marginRight': '10px', 'alignContent': 'center'}}></div>
      <div style={{'display': 'flex', 'flexWrap': 'wrap', 'height': '100%', 'width': '100%'}}>
        {allProductStyles.map((style, index) => (
          <Style style={style} index={index} styleBtnHandler={styleBtnHandler}/>
        ))}
      </div>
    </div>
  )
}

export default StyleSelector;