import React from 'react';

function Style({style, styleBtnHandler}) {
  return (
    <div onClick={styleBtnHandler()} style={{'border': '2px solid black', 'borderRadius': '3px', 'margin': '3px', 'padding': '2px'}}>
    <div >{style.name}</div>
    <img src={style.photos[0].thumbnail_url} width="50px" height="50px" />
  </div>
  )
}

export default Style;