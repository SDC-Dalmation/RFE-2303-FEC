import React, {useEffect, useState} from 'react';
import ExtendedGallery from './ExtendedGallery.jsx';
import GalleryPhoto from './Photos/GalleryPhoto.jsx';
import MainGalleryPhoto from './Photos/MainGalleryPhoto.jsx';

function Gallery({currentProduct, currentStyle, mainGalleryPic, setMainGalleryPic, checkIfProductChangedArr, checkIfStyleChangedArr}) {

  const [showModal, setShowModal] = useState(false);

  const handleExtendedBtn = function(e) {
    e.preventDefault;
    setShowModal(!showModal);
  }

  const handlePicBtn = function(photo, index) {
    return function(e) {
      e.preventDefault;
      setMainGalleryPic(photo);
    }
  }

  if (currentStyle) {
    return (
      <div style={{'width': '31vw', 'height': '53vh'}}>
        <ExtendedGallery handleExtendedBtn={handleExtendedBtn} showModal={showModal}/>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'width': '100%', 'maxHeight': '100%'}}>
          <MainGalleryPhoto handleExtendedBtn={handleExtendedBtn} setMainGalleryPic={setMainGalleryPic} mainGalleryPic={mainGalleryPic} currentStyle={currentStyle} checkIfProductChangedArr={checkIfProductChangedArr} checkIfStyleChangedArr={checkIfStyleChangedArr}/>
            <div className="gallery-carousel" style={{'display': 'flex','flexDirection': 'column' ,'justifyContent': 'center', 'marginTop': '10px', 'marginLeft': '0.5vw', 'position':'absolute', 'backgroundColor': 'rgba(0,0,0,0.5)'}}>
            {currentStyle.photos.map((photo, index) => (
              <GalleryPhoto photo={photo} key={index} currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic}/>
            ))}
            </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>no images workin</div>
      </div>
    )
  }
}

export default Gallery;