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

  const handlePicBtn = function(photo) {
    return function(e) {
      e.preventDefault;
      setMainGalleryPic(photo);
    }
    console.log('changed')
  }

  if (currentStyle) {
    return (
      <div>
        <ExtendedGallery handleExtendedBtn={handleExtendedBtn} showModal={showModal}/>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'marginRight': '20px', 'padding': '5px', 'border': '1px solid black', 'borderRadius': '3px'}}>
          <MainGalleryPhoto handleExtendedBtn={handleExtendedBtn} setMainGalleryPic={setMainGalleryPic} mainGalleryPic={mainGalleryPic} currentStyle={currentStyle} checkIfProductChangedArr={checkIfProductChangedArr} checkIfStyleChangedArr={checkIfStyleChangedArr}/>
            <div className="gallery-carousel" style={{'display': 'flex', 'justifyContent': 'center', 'alignSelf': 'flex-end', 'marginTop': '10px'}}>
            {currentStyle.photos.map((photo, index) => (
              <GalleryPhoto photo={photo} key={index} currentStyle={currentStyle} handlePicBtn={handlePicBtn}/>
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