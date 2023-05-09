import React from 'react';

function GalleryPhoto({photo, currentStyle}) {


  if (photo === currentStyle.photos[0]) {
    return(
      <img  src={photo.thumbnail_url} width="75px" height="75px"/>
    )
  } else {
    return(
      <img src={photo.thumbnail_url} width="50px" height="50px"/>
    )
  }


}

export default GalleryPhoto;