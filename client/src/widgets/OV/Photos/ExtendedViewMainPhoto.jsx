import React, {useEffect} from 'react';

function ExtendedViewMainPhoto({handleExtendedBtn, mainGalleryPic}) {
  if (mainGalleryPic) {
    return(
      <img src={mainGalleryPic} className='extended-gallery-main-pic' ></img>
    )
  } else {
    return(
      <div>Loading</div>
    )
  }
}

export default ExtendedViewMainPhoto;

