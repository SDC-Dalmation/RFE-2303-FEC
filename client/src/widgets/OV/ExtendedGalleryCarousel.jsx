import React, {useState, useEffect} from 'react';
import GalleryPhoto from './Photos/GalleryPhoto.jsx';


function ExtendedGalleryCarousel({currentStyle, handlePicBtn, mainGalleryPic, checkIfStyleChangedArr, rangeOfGallery, setRangeOfGallery, indexOfGallery, setIndexOfGallery, setCurrentlySelected, currentlySelected, showModal}) {


  if (rangeOfGallery) {
    if (rangeOfGallery < 8) {
      return (
        <div className="extended-gallery-carousel" >
          {currentStyle.photos.map((photo, index) => (
            <GalleryPhoto photo={photo} key={index} index={index} currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic} setCurrentlySelected={setCurrentlySelected} currentlySelected={currentlySelected}/>
          ))}
        </div>
      )
    } else {
      return (
        <div className="extended-gallery-carousel" >
        {currentStyle.photos.map((photo, index) => {
          if (index >= indexOfGallery[0] && index <= indexOfGallery[1]) {
            return(
              <GalleryPhoto photo={photo} key={index} index={index} currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic} setCurrentlySelected={setCurrentlySelected} currentlySelected={currentlySelected}/>
            )
          }
        })}
      </div>
      )
    }
  } else {
    return (
      <div>
        Loading
     </div>
    )
  }
}

export default ExtendedGalleryCarousel;

