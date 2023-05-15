import React, {useEffect} from 'react';

function ExtendedViewMainPhoto({handleExtendedBtn, mainGalleryPic, currentStyle, currentlySelected}) {

  if (mainGalleryPic) {
    return(
      <img src={currentStyle.photos[currentlySelected].url} className='extended-gallery-main-pic' ></img>
    )
  } else {
    return(
      <div>Loading</div>
    )
  }
}

export default ExtendedViewMainPhoto;

