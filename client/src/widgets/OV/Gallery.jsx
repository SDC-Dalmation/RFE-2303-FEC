import React, {useEffect} from 'react';

function Gallery({currentProduct, currentStyle}) {


  if (currentStyle) {
    return (
      <div>
        {currentStyle.photos.map((photo) => {
          if (photo === currentStyle.photos[0]) {
            return(
              <div>
                <img className="gallery-photo-default" src={photo.thumbnail_url}/>
              </div>
            )
          } else {
            return(
              <div>
                <img className="gallery-photo" src={photo.thumbnail_url}/>
              </div>
            )
          }
        })}
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