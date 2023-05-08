import React, {useState, useEffect} from "react";
import axios from 'axios';

function QuestionModal ({ onClose }) {

  return(
    <div style={{"display": "flex",
      "justifyContent": "space-evenly",
      "alignItems": "center",
      "boxShadow": "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
      "backgroundColor": "white",
      "border": "2px solid rgb(240, 240, 240)",
      "borderRadius": "12px",
      "position": "fixed",
      "width": "80%",
      "top": "10%",
      "left": "20%",
      "bottom": "10%"}}>
      This is a modal!
      <button onClick={onClose}>Close out</button>
    </div>
  );
}

export default QuestionModal;