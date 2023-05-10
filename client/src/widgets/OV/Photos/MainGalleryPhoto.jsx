import React from 'react';

function MainGalleryPhoto({handleExtendedBtn, setMainGalleryPic, mainGalleryPic, currentStyle}) {

  if (mainGalleryPic) {
    return(
      <img onClick={handleExtendedBtn} src={mainGalleryPic}/>
    )
  } else {
    return(
      <div></div>
    )
  }
}

export default MainGalleryPhoto;