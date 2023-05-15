import React, {useState, useEffect} from 'react';
import ExtendedViewMainPhoto from './Photos/ExtendedViewMainPhoto.jsx';

function ExtendedGallery({handleExtendedBtn, setMainGalleryPic, showModal, mainGalleryPic, rangeOfGallery, indexOfGallery, setCurrentlySelected, currentStyle, checkIfProductChangedArr, checkIfStyleChangedArr}) {



  var modalClassName = 'default-gallery-view';

  if (showModal) {
    modalClassName = 'extended-gallery-bg';
    return (
      <div className={modalClassName}>
        <div className='extended-gallery'>
        <button onClick={handleExtendedBtn} className="extended-btn">back</button>
          <div className='extended-gallery-main'>
            <div className='extended-gallery-buttons'>&#8592;</div>
            <ExtendedViewMainPhoto handleExtendedBtn={handleExtendedBtn} mainGalleryPic={mainGalleryPic}/>
            <div className='extended-gallery-buttons'>&#8594;</div>
          </div>
          <div style={{backgroundColor: 'white', textAlign: 'center'}}>
            CAROUSEL
          </div>
        </div>
      </div>
    )
  } else {
    modalClassName = 'default-gallery-view';
    return (
        <div></div>
    )
  }

}

export default ExtendedGallery;