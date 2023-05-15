import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Style from './Style.jsx';

function StyleSelector({currentProduct, setCurrentStyle, allProductStyles, checkIfStyleChangedArr, currentStyle, selectedStyle, setSelectedStyle}) {4



  const styleBtnHandler = function(index, style_id) {
    return function(e) {
      e.preventDefault;
      if (selectedStyle !== style_id) {
        setSelectedStyle(style_id)
      }
      setCurrentStyle(allProductStyles[index])
    }
  }

  return (
    <div className="style-selector-main">
      <p style={{'fontWeight': '700'}}>Styles</p>
      <div className="style-selector">
        {allProductStyles.map((style, index) => {
          return (
            <Style style={style} index={index} styleBtnHandler={styleBtnHandler} selectedStyle={selectedStyle}/>
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;