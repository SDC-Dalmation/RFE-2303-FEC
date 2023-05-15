import React, {useEffect, useState} from 'react';
import ExtendedGallery from './ExtendedGallery.jsx';
import MainGalleryPhoto from './Photos/MainGalleryPhoto.jsx';
import GalleryCarousel from './GalleryCarousel.jsx';


function Gallery({currentProduct, currentStyle, mainGalleryPic, setMainGalleryPic, checkIfProductChangedArr, checkIfStyleChangedArr}) {

  const [showModal, setShowModal] = useState(false);
  const [rangeOfGallery, setRangeOfGallery] = useState(0)
  const [indexOfGallery, setIndexOfGallery] = useState([0,6])
  const [currentlySelected, setCurrentlySelected] = useState(0)

  var disableScroll = function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
    };
  }

  const enableScroll = function() {
    window.onscroll = function() {};
  }

  const handleExtendedBtn = function(e) {
    e.preventDefault;
    if (showModal) {
      enableScroll()
    } else {
      disableScroll()
    }
    setShowModal(!showModal);
  }

  const handlePicBtn = function(photo, index) {
    return function(e) {
      e.preventDefault;
      setMainGalleryPic(photo);
      setCurrentlySelected(index)
    }
  }

  const handleUpBtn = function(e) {
    e.preventDefault;
    if (indexOfGallery[0] - 1 !== -1) {
      setIndexOfGallery([indexOfGallery[0] - 1, indexOfGallery[1] - 1])
    }
  }

  const handleDownBtn = function(e) {
    e.preventDefault;
    if (indexOfGallery[1] + 1 !== rangeOfGallery) {
      setIndexOfGallery([indexOfGallery[0] + 1, indexOfGallery[1] + 1])
    }
  }



  if (currentStyle) {
    return (
      <div style={{'width': '31vw', 'height': '53vh'}}>
        <ExtendedGallery currentStyle={currentStyle} checkIfProductChangedArr={checkIfProductChangedArr} checkIfStyleChangedArr={checkIfStyleChangedArr} setMainGalleryPic={setMainGalleryPic} handleExtendedBtn={handleExtendedBtn} showModal={showModal} mainGalleryPic={mainGalleryPic} rangeOfGallery={rangeOfGallery} indexOfGallery={indexOfGallery} setCurrentlySelected={setCurrentlySelected}/>
        <div style={{'display': 'flex', 'flexDirection': 'column', 'width': '100%', 'maxHeight': '100%'}}>
          <MainGalleryPhoto handleExtendedBtn={handleExtendedBtn} setMainGalleryPic={setMainGalleryPic} mainGalleryPic={mainGalleryPic} currentStyle={currentStyle} checkIfProductChangedArr={checkIfProductChangedArr} checkIfStyleChangedArr={checkIfStyleChangedArr}/>
          <div className="gallery-carousel" style={{'display': 'flex','flexDirection': 'column' ,'justifyContent': 'top', 'marginTop': '1vh', 'marginLeft': '0.5vw', 'position':'absolute', 'maxHeight': '50vh'}}>
            {currentStyle.photos.length > 7 && currentlySelected !== 0 ? <p className='up-button' onClick={handleUpBtn}>↑</p> : null}
            <GalleryCarousel currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic} checkIfStyleChangedArr={checkIfStyleChangedArr} rangeOfGallery={rangeOfGallery} setRangeOfGallery={setRangeOfGallery} indexOfGallery={indexOfGallery} setIndexOfGallery={setIndexOfGallery} setCurrentlySelected={setCurrentlySelected}/>
            {currentStyle.photos.length > 7 && currentlySelected !== rangeOfGallery - 1 ? <p className='down-button' onClick={handleDownBtn}>↓</p> : null}
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