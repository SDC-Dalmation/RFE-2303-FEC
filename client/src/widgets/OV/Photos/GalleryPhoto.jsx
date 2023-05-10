import React from 'react';

function GalleryPhoto({photo, currentStyle, handlePicBtn}) {

  return(

    <img src={photo.thumbnail_url} style={{'width': '50px', 'height': '50px', 'marginLeft': '3px', 'marginRight': '3px', 'border': '1px solid black'}} onClick={handlePicBtn(photo.url)}/>

  )
}

export default GalleryPhoto;