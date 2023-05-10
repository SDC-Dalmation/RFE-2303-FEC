import React from 'react';

function GalleryPhoto({photo, currentStyle, handlePicBtn}) {

  return(

    <img src={photo.thumbnail_url} width="50px" height="50px" onClick={handlePicBtn(photo.thumbnail_url)}/>

  )
}

export default GalleryPhoto;