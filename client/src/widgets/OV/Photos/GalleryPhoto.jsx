import React from 'react';

function GalleryPhoto({photo, currentStyle, handlePicBtn, mainGalleryPic}) {


  if (photo.url === mainGalleryPic) {
    return(
      <div>
        <p style={{'position': 'absolute'}}>&#9989;</p>
        <img src={photo.thumbnail_url} className="gallery-thumbnail" style={{'width': '3.5vw', 'height': '5vh', 'border': '1px solid green',  'margin': '0.1vh', 'objectFit': 'cover'}} onClick={handlePicBtn(photo.url)}/>
      </div>
    )
  } else {
    return(
      <div>
        <img src={photo.thumbnail_url} className="gallery-thumbnail" style={{'width': '3.5vw', 'height': '5vh', 'border': '1px solid black',  'margin': '0.1vh', 'objectFit': 'cover'}} onClick={handlePicBtn(photo.url)}/>
      </div>
    )
  }
}

export default GalleryPhoto;