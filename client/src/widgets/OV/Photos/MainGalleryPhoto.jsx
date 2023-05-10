import React from 'react';

function MainGalleryPhoto({setMainGalleryPic, mainGalleryPic, currentStyle}) {

  if (mainGalleryPic) {
    return(
      <img src={mainGalleryPic}/>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default MainGalleryPhoto;