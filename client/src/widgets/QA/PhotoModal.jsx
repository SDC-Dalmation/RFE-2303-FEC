import React, {useState, useEffect} from "react";
import axios from 'axios';

function PhotoModal ({ photos, setPhotos, onClose, count, addedPhoto }) {

  let lessThan5Photos = count;

  let photoButton = (<div id="photoLimit">Photo Limit Reached</div>);
  if (lessThan5Photos < 5) {
    photoButton= (
      <div>
        <label htmlFor="addPhoto">Add a Photo</label>
        <input id="addPhoto"type="file" accept="image/*" ></input>
        <button type="submit">Submit Photo</button>
      </div>
    )
  }

  async function addThumbnail(photoFile) {

    let allPhotos = photos.slice();
    let photoURL = URL.createObjectURL(photoFile);
    allPhotos.push(photoURL);
    setPhotos(allPhotos);
    addedPhoto(lessThan5Photos + 1);


    // const reader = new FileReader();
    // await reader.readAsDataURL(photoFile);
    // reader.addEventListener("load", function () {
    //   let allPhotos = photos.slice();
    //   console.log(reader.result);
    //   let photoURL = URL.createObjectURL(photoFile);
    //   allPhotos.push(photoURL);
    //   setPhotos(allPhotos);
    //   addedPhoto(lessThan5Photos + 1);
    // })

}

  function submitPhoto (e) {
    e.preventDefault();
    // Read the form data
    let photo = e.target[0].files[0];
    addThumbnail(photo);

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