import React from 'react';

function MainGalleryPhoto({handleExtendedBtn, setMainGalleryPic, mainGalleryPic, currentStyle}) {

  if (mainGalleryPic) {
    return(
      <img onClick={handleExtendedBtn} src={mainGalleryPic} style={{'border': '2px solid black'}}/>
    )
  } else {
    return(
      <img onClick={handleExtendedBtn} src={currentStyle.photos[0].thumbnail_url} style={{'border': '2px solid black'}}/>
    )
  }
}

export default MainGalleryPhoto;