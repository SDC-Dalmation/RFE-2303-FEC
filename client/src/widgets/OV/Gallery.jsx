import React, {useEffect, useState} from 'react';
import ExtendedGallery from './ExtendedGallery.jsx';
import GalleryPhoto from './GalleryPhoto.jsx';

function Gallery({currentProduct, currentStyle}) {

  const [showModal, setShowModal] = useState(false);

  const handleExtendedBtn = function(e) {
    e.preventDefault;
    setShowModal(!showModal);
  }

  if (currentStyle) {
    return (
      <div>
        <ExtendedGallery handleExtendedBtn={handleExtendedBtn} showModal={showModal}/>
        <div width='400px' height='100px'>
          {currentStyle.photos.map((photo, index) => (
            <GalleryPhoto photo={photo} key={index} currentStyle={currentStyle}/>
          ))}
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