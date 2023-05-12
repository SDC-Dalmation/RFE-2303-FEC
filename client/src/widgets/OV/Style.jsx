import React from 'react';

function Style({style, styleBtnHandler, index, selectedStyle}) {

  if (selectedStyle === style.style_id) {
    return (
      <div onClick={styleBtnHandler(index, style.style_id)} style={{'flexBasis':'21%','border': '2px solid green', 'borderRadius': '3px', 'margin': '3px', 'padding': '2px', 'height': '20%', 'width': '20%' }}>
        <div >{style.name}</div>
        <div style={{'display':'flex'}}>
          <img src={style.photos[0].thumbnail_url} width="50px" height="50px" />
          <p style={{'marginLeft': '5px'}}>&#9989;</p>
        </div>
      </div>
    )
  } else {
    return (
      <div onClick={styleBtnHandler(index, style.style_id)} style={{'flexBasis':'21%','border': '2px solid black', 'borderRadius': '3px', 'margin': '3px', 'padding': '2px', 'height': '20%', 'width': '20%' }}>
        <div >{style.name}</div>
        <div style={{'display':'flex'}}>
          <img src={style.photos[0].thumbnail_url} width="50px" height="50px" />
        </div>
      </div>
    )
  }

}

export default Style;