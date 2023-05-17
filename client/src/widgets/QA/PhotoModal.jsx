import React, {useState, useEffect} from "react";
import axios from 'axios';

function PhotoModal ({ photos, setPhotos, onClose, count, addedPhoto }) {

  let lessThan5Photos = count;

  const buttonStyle = {
    "backgroundColor" : "rgb(216,216,216)",
    "color": "black",
    "cursor": "pointer",
    "display": "inline",
    "fontFamily": "Arial",
    "padding": "1vh",
    "marginTop": "2vh",
    "width": "25%",
    "border": "none",
    "textAlign": "center",
    "outline": "none",
    "fontSize": "14px",
    "transition": "0.4s",
  };

  let photoButton = (<div id="photoLimit">Photo Limit Reached</div>);
  if (lessThan5Photos < 5) {
    photoButton= (
      <div>
        <label htmlFor="addPhoto" style={{"marginBottom": "2vh"}}>Add a Photo</label>
          <br></br>
        <input id="addPhoto"type="file" accept="image/*" style={{"marginTop": "2vh"}}></input>
          <br></br>
        <button type="submit" style={buttonStyle}>Submit Photo</button>
      </div>
    )
  }



  const modalStyle = {"display": "flex",
  "flexDirection": "column",
  "justifyContent": "center",
  "alignItems": "left",
  "boxShadow": "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
  "backgroundColor": "white",
  "border": "1px solid black",
  "borderRadius": "12px",
  "fontFamily": "Arial",
  "padding": "1vh",
  "paddingLeft": "20vh",
  "paddingRight": "20vh",
  "position": "fixed",
  "top": "5vh",
  "left": "40vh",
  "right": "20vh",
  "bottom": "5vh"};

  async function addThumbnail(photoFile) {
    let allPhotos = photos.slice();
    let photoURL = URL.createObjectURL(photoFile);
    allPhotos.push(photoURL);
    setPhotos(allPhotos);
    addedPhoto(lessThan5Photos + 1);
}

  function submitPhoto (e) {
    e.preventDefault();
    let photo = e.target[0].files[0];
    addThumbnail(photo);
    onClose();
  }

  return(
    <div style={modalStyle}>
      <h3>Submit Your Photo</h3>
      <form onSubmit={submitPhoto}>
        {photoButton}
      </form>
      <button style={buttonStyle} onClick={onClose}>Close out</button>
    </div>
  );
}

export default PhotoModal;