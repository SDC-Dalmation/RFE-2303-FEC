import React, {useEffect} from 'react';

function MainGalleryPhoto({handleExtendedBtn, setMainGalleryPic, mainGalleryPic, currentStyle, checkIfProductChangedArr, checkIfStyleChangedArr, currentlySelected}) {

  var imageToShow = currentStyle.photos[0].url;

  useEffect(()=>{imageToShow = currentStyle.photos[0].url}, checkIfProductChangedArr)

  useEffect(()=>{setMainGalleryPic(currentStyle.photos[0].url)}, checkIfStyleChangedArr)

  if (mainGalleryPic) {
    if (currentStyle.photos[currentlySelected]) {
      return(
        <img onClick={handleExtendedBtn} src={currentStyle.photos[currentlySelected].url} className='main-gallery-pic' />
      )
    } else {
      return(
        <img onClick={handleExtendedBtn} src={currentStyle.photos[0].url} className='main-gallery-pic' />
      )
    }
  } else {
    return(
      <img className='main-gallery-pic' onClick={handleExtendedBtn} src={imageToShow}/>
    )

  }
}

export default MainGalleryPhoto;

