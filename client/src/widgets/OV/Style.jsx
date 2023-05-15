import React from 'react';

function Style({style, styleBtnHandler, index, selectedStyle}) {

  if (selectedStyle === style.style_id) {
    return (
      <div onClick={styleBtnHandler(index, style.style_id)} className="style" style={{'border': '2px solid green'}}>
        <div >{style.name}</div>
        <div style={{'display':'flex'}}>
          <img src={style.photos[0].thumbnail_url} className="style-thumbnail"/>
          <p style={{'marginLeft': '5px'}}>&#9989;</p>
        </div>
      </div>
    )
  } else {
    return (
      <div onClick={styleBtnHandler(index, style.style_id)} className="style" style={{'border': '2px solid black'}}>
        <div >{style.name}</div>
        <div style={{'display':'flex'}}>
          <img src={style.photos[0].thumbnail_url} className="style-thumbnail" />
        </div>
      </div>
    )
  }

}

export default Style;