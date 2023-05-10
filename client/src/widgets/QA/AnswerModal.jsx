import React, {useState, useEffect} from "react";
import axios from 'axios';
import { createPortal } from 'react-dom';
import PhotoModal from './PhotoModal.jsx';

function AnswerModal ({ questionID, onClose, productName, questionBody }) {

  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoCount, incrementPhotoCount] = useState(0);

  const [savedAnswer, setSavedAnswer] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedName, setSavedName] = useState("");



  function submitAnswer(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    let body = e.target[0].value;
    let name = e.target[1].value;
    let email = e.target[2].value;
    axios.post('/addAnswer', {question_id: questionID, body: body, name: name, email: email, photos: photos}).then(
      () => onClose()
    )
  }

  if (showPhotoModal) {
    return  <PhotoModal photos={photos} setPhotos={setPhotos} onClose={() => setShowPhotoModal(false)}
    count={photoCount} addedPhoto={incrementPhotoCount} />
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
      <h3>Submit Your Answer</h3>
      <h4>{productName} : {questionBody}</h4>
      <form onSubmit={submitAnswer}>
      <label>
        Your Answer: <textarea value={savedAnswer} onChange={e => {
          setSavedAnswer(e.target.value);
        }} name="myAnswer" placeholder="Answer..." maxLength="1000" required/>
      </label>
      <br></br>
      <label>
        Your Display Name: <input value={savedName} onChange={e => {
          setSavedName(e.target.value);
        }}name="myName" placeholder="Example: jackson11!" maxLength="60" required/>
      </label>
      <p>For privacy reasons, do not use your full name or email address</p>
      <label htmlFor="email">
        Your Email: <input value={savedEmail} onChange={e => {
          setSavedEmail(e.target.value);
        }}type="email" name="myEmail" placeholder="Example: jack@email.com" maxLength="60" required/>
      </label>
      <button onClick={() => {setShowPhotoModal(true)}}>Add Photo</button>
      <div id="thumbnails">
      </div>
      <br></br>
        <button type="submit">Submit Answer</button>
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