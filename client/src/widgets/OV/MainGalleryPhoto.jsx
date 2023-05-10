import React from 'react';

function MainGalleryPhoto({setMainGalleryPic, mainGalleryPic, currentStyle}) {


  if (mainGalleryPic === 0) {
    setMainGalleryPic(currentStyle.photos[0].thumbnail_url)
  }

  return(
    <img src={mainGalleryPic} />
  )
}

export default MainGalleryPhoto;