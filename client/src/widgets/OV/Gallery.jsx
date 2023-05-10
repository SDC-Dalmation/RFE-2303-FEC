import React, {useEffect, useState} from 'react';
import ExtendedGallery from './ExtendedGallery.jsx';
import GalleryPhoto from './Photos/GalleryPhoto.jsx';
import MainGalleryPhoto from './Photos/MainGalleryPhoto.jsx';

function Gallery({currentProduct, currentStyle, mainGalleryPic, setMainGalleryPic}) {

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
  }

  if (currentStyle) {
    return (
      <div>
        <ExtendedGallery handleExtendedBtn={handleExtendedBtn} showModal={showModal}/>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'marginRight': '20px'}}>
          <MainGalleryPhoto handleExtendedBtn={handleExtendedBtn} setMainGalleryPic={setMainGalleryPic} mainGalleryPic={mainGalleryPic} currentStyle={currentStyle}/>
            <div style={{'display': 'flex', 'justifyContent': 'center', 'alignSelf': 'flex-end'}}>
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