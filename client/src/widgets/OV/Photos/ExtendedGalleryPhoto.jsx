import React from 'react';

function ExtendedGalleryPhoto({photo, currentStyle, handlePicBtn, mainGalleryPic, setCurrentlySelected, index, currentlySelected}) {

  if (currentlySelected === index) {
    return(
      <div className="extended-gallery-carousel-piece">
        <img src={photo.thumbnail_url} className="extended-gallery-thumbnail" style={{'border': '2px solid lightgreen'}} onClick={handlePicBtn(photo.url, index)}/>
      </div>
    )
  } else if (currentlySelected > currentStyle.photos.length) {
    if (index === 0) {
      return(
        <div className="extended-gallery-carousel-piece">
          <img src={photo.thumbnail_url} className="extended-gallery-thumbnail" style={{'border': '2px solid lightgreen'}} onClick={handlePicBtn(photo.url, index)}/>
        </div>
      )
    } else {
      return(
        <div className="extended-gallery-carousel-piece">
          <img src={photo.thumbnail_url} className="extended-gallery-thumbnail" onClick={handlePicBtn(photo.url, index)}/>
        </div>
      )
    }
  } else {
    return(
      <div className="extended-gallery-carousel-piece">
        <img src={photo.thumbnail_url} className="extended-gallery-thumbnail" onClick={handlePicBtn(photo.url, index)}/>
      </div>
    )
  }
}

export default ExtendedGalleryPhoto;