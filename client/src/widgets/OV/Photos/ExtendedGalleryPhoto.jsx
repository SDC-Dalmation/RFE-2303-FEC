import React from 'react';

function ExtendedGalleryPhoto({photo, currentStyle, handlePicBtn, mainGalleryPic, setCurrentlySelected, index, currentlySelected}) {

  if (currentlySelected === index) {
    return(
      <div className="extended-gallery-carousel-piece">
        <p id="extended-thumbnail-checkmark">&#9989;</p>
        <img src={photo.thumbnail_url} className="extended-gallery-thumbnail" style={{'border': '1px solid green'}} onClick={handlePicBtn(photo.url, index)}/>
      </div>
    )
  } else if (currentlySelected > currentStyle.photos.length) {
    if (index === 0) {
      return(
        <div className="extended-gallery-carousel-piece">
          <p id="extended-thumbnail-checkmark">&#9989;</p>
          <img src={photo.thumbnail_url} className="extended-gallery-thumbnail" style={{'border': '1px solid green'}} onClick={handlePicBtn(photo.url, index)}/>
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