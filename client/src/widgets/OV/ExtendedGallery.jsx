import React, {useState, useEffect} from 'react';
import ExtendedViewMainPhoto from './Photos/ExtendedViewMainPhoto.jsx';
import GalleryCarousel from './GalleryCarousel.jsx';
import ExtendedGalleryCarousel from './ExtendedGalleryCarousel.jsx';

function ExtendedGallery({handleExtendedBtn, showModal, mainGalleryPic, currentlySelected, currentStyle, handlePicBtn, checkIfStyleChangedArr, rangeOfGallery, setRangeOfGallery, indexOfGallery, setIndexOfGallery, setCurrentlySelected, setMainGalleryPic}) {


  const handleRightBtn = function(e) {
    e.preventDefault;
    if (currentlySelected === rangeOfGallery - 1) {
      setCurrentlySelected(0)
    } else {
      setCurrentlySelected(currentlySelected + 1)
    }
    if (currentlySelected > indexOfGallery[1] - 1) {
      document.getElementById('down-button').click()
    }
    setMainGalleryPic(currentStyle.photos[currentlySelected].url)
  }

  const handleLeftBtn = function(e) {
    e.preventDefault;
    if (currentlySelected ===  0) {
      setCurrentlySelected(rangeOfGallery - 1)
    } else {
      setCurrentlySelected(currentlySelected - 1)
    }
    if (currentlySelected <= indexOfGallery[0]) {
      document.getElementById('up-button').click()
    }
    setMainGalleryPic(currentStyle.photos[currentlySelected].url)
  }

  var modalClassName = 'default-gallery-view';

  if (showModal) {
    modalClassName = 'extended-gallery-bg';
    return (
      <div className={modalClassName}>
        <div className='extended-gallery'>
        <button onClick={handleExtendedBtn} className="extended-btn">back</button>
          <div className='extended-gallery-main'>
             {currentlySelected !== 0 ? <div className='extended-gallery-buttons' onClick={handleLeftBtn}>&#8592;</div> : null}
            <ExtendedViewMainPhoto handleExtendedBtn={handleExtendedBtn} mainGalleryPic={mainGalleryPic} currentStyle={currentStyle} currentlySelected={currentlySelected}/>
            {currentlySelected !== rangeOfGallery - 1 ? <div className='extended-gallery-buttons' onClick={handleRightBtn}>&#8594;</div> : null}
          </div>
            <ExtendedGalleryCarousel currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic} checkIfStyleChangedArr={checkIfStyleChangedArr} rangeOfGallery={rangeOfGallery} setRangeOfGallery={setRangeOfGallery} indexOfGallery={indexOfGallery} setIndexOfGallery={setIndexOfGallery} setCurrentlySelected={setCurrentlySelected} currentlySelected={currentlySelected}/>
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