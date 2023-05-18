import React, {useState, useEffect} from "react";
import axios from 'axios';
import PostAPIInteraction from "../PostAPIInteraction.jsx";

function QuestionModal ({ productID, onClose, prodName }) {

  const modalStyle = {"display": "flex",
  "flexDirection": "column",
  "fontFamily": "Arial",
  "justifyContent": "center",
  "alignItems": "left",
  "boxShadow": "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
  "backgroundColor": "white",
  "border": "1px solid black",
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

  function submitQuestion(e) {
    e.preventDefault();
    const form = e.target;
    let body = e.target[0].value;
    let name = e.target[1].value;
    let email = e.target[2].value;
    PostAPIInteraction("Submitted Question", "Questions & Answers");
    axios.post('/addQuestion', {product_id: productID, body: body, name: name, email: email}).then(
      () => onClose()
    )
  }

  return(
    <div style={modalStyle}>
      <h3>Ask Your Question</h3>
      <h4>About the {prodName}</h4>
      <form onSubmit={submitQuestion} data-testid="form">
        <h5>Your Question:</h5>
      <label>
        <textarea name="myQuestion" placeholder="Question..." maxLength="1000" style={{"width": "100%"}}required/>
      </label>
      <br></br>
        <h5>Your Display Name:</h5>
      <label>
        <input name="myName" placeholder="Example: jackson11!" maxLength="60" style={{"width": "50%"}}required/>
      </label>
      <p>For privacy reasons, do not use your full name or email address</p>
      <h5>Your Email: </h5>
      <label htmlFor="email">
        <input type="email" name="myEmail" placeholder="Example: abc1@abc.com" maxLength="60" style={{"width": "50%"}} required/>
      </label>
      <br></br>
        <button type="submit" style={{"marginTop": "3vh", "marginBottom": "3vh",}}>Submit Question</button>
      </form>
      <button onClick={onClose}>Close out</button>
    </div>
  );
}

export default QuestionModal;