import React from 'react';

function Style({style, styleBtnHandler}) {


  return (
    <div>
    <div onClick={styleBtnHandler()} >{style.name}</div>
    <img src={style.photos[0].thumbnail_url} width="50" height="50" />
  </div>
  )
}

export default Style;