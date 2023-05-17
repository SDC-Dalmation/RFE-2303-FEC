import React from 'react';

function GalleryPhoto({photo, currentStyle, handlePicBtn, mainGalleryPic, setCurrentlySelected, index, currentlySelected}) {

  if (currentlySelected === index) {
    return(
      <div className="gallery-carousel-piece">
        <img src={photo.thumbnail_url} className="gallery-thumbnail" style={{'border': '2px solid lightgreen'}} onClick={handlePicBtn(photo.url, index)}/>
      </div>
    )
  } else if (currentlySelected > currentStyle.photos.length) {
    if (index === 0) {
      return(
        <div className="gallery-carousel-piece">
          <img src={photo.thumbnail_url} className="gallery-thumbnail" style={{'border': '2px solid lightgreen'}} onClick={handlePicBtn(photo.url, index)}/>
        </div>
      )
    } else {
      return(
        <div className="gallery-carousel-piece">
          <img src={photo.thumbnail_url} className="gallery-thumbnail" onClick={handlePicBtn(photo.url, index)}/>
        </div>
      )
    }
  } else {
    return(
      <div className="gallery-carousel-piece">
        <img src={photo.thumbnail_url} className="gallery-thumbnail" onClick={handlePicBtn(photo.url, index)}/>
      </div>
    )
  }
}

export default GalleryPhoto;