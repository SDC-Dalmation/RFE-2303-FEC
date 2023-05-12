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
    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
      <p style={{'fontWeight': '700'}}>Styles</p>
      <div style={{'marginTop': '10px', 'marginRight': '10px', 'alignContent': 'center'}}></div>
      <div style={{'display': 'flex', 'flexWrap': 'wrap', 'height': '100%', 'width': '100%'}}>
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