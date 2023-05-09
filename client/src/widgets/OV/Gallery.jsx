import React, {useEffect, useState} from 'react';
import ExtendedGallery from './ExtendedGallery.jsx';

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
        <div >
          {currentStyle.photos.map((photo) => {
            if (photo === currentStyle.photos[0]) {
              return(
                <div>
                  <img  src={photo.thumbnail_url} width="50px" height="50px"/>
                </div>)
            } else {
              return(
                <div>
                  <img src={photo.thumbnail_url} width="50px" height="50px"/>
                </div>)
            }
          })}
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