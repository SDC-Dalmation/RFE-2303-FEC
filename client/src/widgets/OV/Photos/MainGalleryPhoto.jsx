import React, {useEffect} from 'react';

function MainGalleryPhoto({handleExtendedBtn, setMainGalleryPic, mainGalleryPic, currentStyle, checkIfProductChangedArr, checkIfStyleChangedArr}) {

  var imageToShow = currentStyle.photos[0].url;

  useEffect(()=>{imageToShow = currentStyle.photos[0].url}, checkIfProductChangedArr)

  useEffect(()=>{setMainGalleryPic(currentStyle.photos[0].url)}, checkIfStyleChangedArr)

  if (mainGalleryPic) {
    return(
      <img onClick={handleExtendedBtn} src={mainGalleryPic} style={{'border': '2px solid black', 'width': '30vw','maxHeight': '50vh'}}/>
    )
  } else {
    return(
      <img onClick={handleExtendedBtn} src={imageToShow} style={{'border': '2px solid black', 'width': '30vw','maxHeight': '50vh'}}/>
    )
  }
}

export default MainGalleryPhoto;