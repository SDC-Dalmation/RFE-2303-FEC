import React from 'react';

function Style({style, styleBtnHandler}) {
  return (
    <div onClick={styleBtnHandler()} style={{'border': '2px solid black', 'border-radius': '3px'}}>
    <div >{style.name}</div>
    <img src={style.photos[0].thumbnail_url} width="50" height="50" />
  </div>
  )
}

export default Style;