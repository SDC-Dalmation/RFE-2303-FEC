import React, {useState, useEffect} from "react";
import axios from 'axios';
import { createPortal } from 'react-dom';
import PhotoModal from './PhotoModal.jsx';

function AnswerModal ({ questionID, onClose, productName, questionBody }) {

  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoCount, incrementPhotoCount] = useState(0);
  const [thumbNails, setThumbnails] = useState([]);

  const [savedAnswer, setSavedAnswer] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedName, setSavedName] = useState("");

  let pics = (<div></div>);
  if (photos.length > 0) {
    pics = photos.map((photo, index) => {
      return (<img height="50px" src={`${photo}`} key={index} style={{"marginLeft": "1vh",}}></img>)
    })
  }


  function submitAnswer(e) {
    e.preventDefault();

    const image = "https://www.uhaul.com/MovingSupplies/Image/GetMedia/?id=8390&media=8185";
    let imageArray = photos.map((photo) => {
      return image;
    })

    // Read the form data
    const form = e.target;
    let body = e.target[0].value;
    let name = e.target[1].value;
    let email = e.target[2].value;
    axios.post('/addAnswer', {question_id: questionID, body: body, name: name, email: email, photos: imageArray}).then(
      () => onClose()
    )
  }

  if (showPhotoModal) {
    return  <PhotoModal photos={photos} setPhotos={setPhotos} onClose={() => setShowPhotoModal(false)}
    count={photoCount} addedPhoto={incrementPhotoCount} />
  }

  return(
    <div style={{"display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "left",
    "boxShadow": "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
    "backgroundColor": "white",
    "border": "2px solid rgb(240, 240, 240)",
    "borderRadius": "12px",
    "padding": "1vh",
    "paddingLeft": "20vh",
    "paddingRight": "20vh",
    "position": "fixed",
    "top": "5vh",
    "left": "40vh",
    "right": "20vh",
    "bottom": "5vh"}}>
      <h4 style={{"marginBottom": "0vh", "marginTop" : "1vh",}}>Submit Your Answer</h4>
      <h5 style={{"marginBottom": "0vh",}}>{productName} : {questionBody}</h5>
      <form onSubmit={submitAnswer}>
      <h5>Your Answer:</h5>
      <label>
        <textarea value={savedAnswer} onChange={e => {
          setSavedAnswer(e.target.value);
        }} name="myAnswer" placeholder="Answer..." maxLength="1000" style={{"width": "100%"}} required/>
      </label>
      <br></br>
      <h5>Your Display Name:</h5>
      <label>
       <input value={savedName} onChange={e => {
          setSavedName(e.target.value);
        }}name="myName" placeholder="Example: jackson11!" maxLength="60" style={{"width": "50%"}} required/>
      </label>
      <p>For privacy reasons, do not use your full name or email address</p>
      <h5>Your Email: </h5>
      <label htmlFor="email">
        <input value={savedEmail} onChange={e => {
          setSavedEmail(e.target.value);
        }}type="email" name="myEmail" placeholder="Example: jack@email.com" maxLength="60" style={{"width": "50%"}} required/>
      </label>
      <br></br>
      <button onClick={() => {setShowPhotoModal(true)}} style={{"marginTop": "3vh",}}>Add Photo</button>
      <div id="thumbnails" style={{"marginTop": "2vh",}}>
        {pics}
      </div>
      <br></br>
        <button type="submit" style={{ "marginBottom": "3vh",}} >Submit Answer</button>
      </form>
      {/* {showPhotoModal && createPortal(
        <PhotoModal photos={photos} setPhotos={setPhotos} onClose={() => setShowPhotoModal(false)}
        count={photoCount} addedPhoto={incrementPhotoCount} addThumbnail={addThumbnail}/>,
        document.getElementById("modal")
      )} */}
      <button onClick={onClose}>Close out</button>
    </div>
  );
}

export default AnswerModal;