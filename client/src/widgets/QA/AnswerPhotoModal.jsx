import React, {useState, useEffect} from "react";
import axios from 'axios';

function AnswerPhotoModal ({ photo }) {

  const [zoomedIn, setZoomedIn] = useState(false);

  const closeCSS = {
    "position": "absolute",
    "top": "15px",
    "right": "35px",
    "color": "#f1f1f",
    "fontSize": "20px",
    "fontWeight": "bold",
    "transition": "0.3s",
  }

  const modalStyle = {"display": "flex",
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
  "bottom": "5vh",
}

  if (zoomedIn) {
    return(
      <div>
      <div style={modalStyle}>
        <span style={closeCSS} onClick={() => setZoomedIn(false)}>&times;</span>
        <img src={photo}></img>
      </div>

      <img src={photo} style = {{height: "10vh"}} onClick={() => setZoomedIn(true)}></img>
    </div>
    );
  } else {
    return <div>
      <img src={photo} style = {{height: "10vh"}} onClick={() => setZoomedIn(true)}></img>
    </div>
  }


}

export default AnswerPhotoModal;