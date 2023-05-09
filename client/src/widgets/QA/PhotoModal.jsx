import React, {useState, useEffect} from "react";
import axios from 'axios';

function PhotoModal ({ photos, setPhotos, onClose, count, addedPhoto }) {

  let lessThan5Photos = count;
  console.log('COUNT', count);

  let photoButton = (<div>Photo Limit Reached</div>);
  if (lessThan5Photos < 5) {
    photoButton= (
      <div>
        <label htmlFor="addPhoto">Add a Photo</label>
        <input type="file" accept="image/*"></input>
        <button type="submit">Submit Photo</button>
      </div>
    )
  }

  function submitPhoto(e) {
    e.preventDefault();

    // Read the form data
    let photo = e.target[0].value;
    let allPhotos = photos.slice();
    allPhotos.push(photo);
    setPhotos(allPhotos);
    console.log('PHOTO URL', allPhotos);
    addedPhoto(lessThan5Photos + 1);


    onClose();
  }

  return(
    <div style={{"display": "flex",
      "justifyContent": "space-evenly",
      "alignItems": "left",
      "boxShadow": "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
      "backgroundColor": "white",
      "border": "2px solid rgb(240, 240, 240)",
      "borderRadius": "12px",
      "position": "fixed",
      "width": "80%",
      "top": "10%",
      "left": "20%",
      "bottom": "10%"}}>
      <h3>Submit Your Photo</h3>
      <form onSubmit={submitPhoto}>
        {photoButton}
      </form>
      <button onClick={onClose}>Close out</button>
    </div>
  );
}

export default PhotoModal;