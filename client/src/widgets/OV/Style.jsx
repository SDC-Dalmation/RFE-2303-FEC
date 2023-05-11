import React from 'react';

function Style({style, styleBtnHandler}) {
  return (
    <div onClick={styleBtnHandler()} style={{'flexBasis':'21%','border': '2px solid black', 'borderRadius': '3px', 'margin': '3px', 'padding': '2px', 'height': '20%', 'width': '20%' }}>
    <div >{style.name}</div>
    <img src={style.photos[0].thumbnail_url} width="50px" height="50px" />
  </div>
  )
}

export default Style;