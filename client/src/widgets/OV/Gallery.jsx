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
    if (indexOfGallery[0] !== 0) {
      setIndexOfGallery([indexOfGallery[0] - 1, indexOfGallery[1] - 1])
    }
  }

  const handleDownBtn = function(e) {
    e.preventDefault;
    if (indexOfGallery[1] + 1 !== rangeOfGallery) {
      setIndexOfGallery([indexOfGallery[0] + 1, indexOfGallery[1] + 1])
    }
  }

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



  if (currentStyle) {
    return (
      <div style={{'width': '31vw', 'height': '53vh', 'display': 'flex', 'justifyContent': 'flex-start', 'marginLeft': '1vw'}}>
        <ExtendedGallery handleExtendedBtn={handleExtendedBtn} showModal={showModal}/>
        {currentlySelected !== 0 ? <p style={{'alignSelf': 'center', 'border': '1px solid black', 'height': '2h', 'textAlign': 'center'}} onClick={handleLeftBtn}>&lt;</p> : <p style={{'alignSelf': 'center', 'height': '2h', 'textAlign': 'center'}}></p>}
        <div style={{'display': 'flex', 'flexDirection': 'column', 'width': '100%', 'maxHeight': '100%', 'marginLeft': '1vw'}}>
          <MainGalleryPhoto handleExtendedBtn={handleExtendedBtn} setMainGalleryPic={setMainGalleryPic} mainGalleryPic={mainGalleryPic} currentStyle={currentStyle} checkIfProductChangedArr={checkIfProductChangedArr} checkIfStyleChangedArr={checkIfStyleChangedArr} currentlySelected={currentlySelected}/>
          <div className="gallery-carousel" style={{'display': 'flex','flexDirection': 'column' ,'justifyContent': 'top', 'marginTop': '1vh', 'marginLeft': '0.5vw', 'position':'absolute', 'maxHeight': '50vh'}}>
            {currentStyle.photos.length > 7 && currentlySelected !== 0 ? <p id='up-button' onClick={handleUpBtn}>↑</p> : null}
            <GalleryCarousel currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic} checkIfStyleChangedArr={checkIfStyleChangedArr} rangeOfGallery={rangeOfGallery} setRangeOfGallery={setRangeOfGallery} indexOfGallery={indexOfGallery} setIndexOfGallery={setIndexOfGallery} setCurrentlySelected={setCurrentlySelected} currentlySelected={currentlySelected}/>
            {currentStyle.photos.length > 7 && currentlySelected !== rangeOfGallery - 1 ? <p id='down-button' onClick={handleDownBtn}>↓</p> : null}
          </div>
        </div>
        {currentlySelected !== rangeOfGallery - 1 ? <p style={{'alignSelf': 'center', 'border': '1px solid black', 'height': '2vh', 'textAlign': 'center'}} onClick={handleRightBtn} >&gt;</p> : <p style={{'alignSelf': 'center', 'height': '2h', 'textAlign': 'center'}}></p>}
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