import React, {useEffect, useState} from 'react';

function ExtendedViewMainPhoto({handleExtendedBtn, mainGalleryPic, currentStyle, currentlySelected}) {

  const [isZoomed, setIsZoomed] = useState(false);

  const handleMainPicClick = function(e) {
    e.preventDefault;
    if (!isZoomed) {
      document.getElementById('extended-gallery-main-pic').style.transform += "scale(2.5)"
      document.getElementById('extended-thumbnail-checkmark').style.display = 'none';
      document.getElementById('extended-gallery-main-pic').style.cursor = "zoom-out"
    } else {
      document.getElementById('extended-gallery-main-pic').style.cursor = "zoom-in"
      document.getElementById('extended-thumbnail-checkmark').style.display = 'flex';
      document.getElementById('extended-gallery-main-pic').style.transform += "scale(0.4)"
    }
    setIsZoomed(!isZoomed)
  }

  const resetZoom = function() {
    if (document.getElementById('extended-gallery-main-pic').style.cursor === "zoom-out") {
      document.getElementById('extended-gallery-main-pic').style.cursor = "zoom-in"
    }


  }

  if (mainGalleryPic) {
    return(
      <img src={currentStyle.photos[currentlySelected].url} id='extended-gallery-main-pic' onMouseOver={resetZoom} onClick={handleMainPicClick}></img>
    )
  } else {
    return(
      <div>Loading</div>
    )
  }
}

export default ExtendedViewMainPhoto;

