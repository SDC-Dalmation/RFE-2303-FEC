import React, {useState, useEffect} from 'react';
import GalleryPhoto from './Photos/GalleryPhoto.jsx';

function GalleryCarousel({currentStyle, handlePicBtn, mainGalleryPic, checkIfStyleChangedArr, rangeOfGallery, setRangeOfGallery, indexOfGallery, setIndexOfGallery, setCurrentlySelected, currentlySelected}) {

  useEffect(()=> {setRangeOfGallery(currentStyle.photos.length); setIndexOfGallery([0, 6])}, checkIfStyleChangedArr)


  if (rangeOfGallery) {
    if (rangeOfGallery < 8) {
      return (
        <div className="gallery-carousel" style={{'display': 'flex','flexDirection': 'column' ,'justifyContent': 'top', 'backgroundColor': 'rgba(0,0,0,0.5)', 'maxHeight': '41vh'}}>
         {currentStyle.photos.map((photo, index) => (
           <GalleryPhoto photo={photo} key={index} index={index} currentStyle={currentStyle} handlePicBtn={handlePicBtn} mainGalleryPic={mainGalleryPic} setCurrentlySelected={setCurrentlySelected} currentlySelected={currentlySelected}/>
         ))}
       </div>
      )
    } else {
      return (
        <div className="gallery-carousel" style={{'display': 'flex','flexDirection': 'column' ,'justifyContent': 'top', 'backgroundColor': 'rgba(0,0,0,0.5)', 'maxHeight': '41vh'}}>
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

export default GalleryCarousel;