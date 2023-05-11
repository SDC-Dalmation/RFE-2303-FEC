import React, {useEffect} from 'react';

function MainGalleryPhoto({handleExtendedBtn, setMainGalleryPic, mainGalleryPic, currentStyle, checkIfProductChangedArr, checkIfStyleChangedArr}) {

  var imageToShow = currentStyle.photos[0].url;

  useEffect(()=>{imageToShow = currentStyle.photos[0].url}, checkIfProductChangedArr)

  useEffect(()=>{setMainGalleryPic(currentStyle.photos[0].url)}, checkIfStyleChangedArr)

  if (mainGalleryPic) {
    return(
      <img onClick={handleExtendedBtn} src={mainGalleryPic} style={{'border': '2px solid black',  'maxHeight': '400px', 'maxWidth': '300px'}}/>
    )
  } else {
    return(
      <img onClick={handleExtendedBtn} src={imageToShow} style={{'border': '2px solid black', 'maxHeight': '400px', 'maxWidth': '300px'}}/>
    )
  }
}

export default MainGalleryPhoto;