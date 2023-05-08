import React, {useState, useEffect} from "react";
import axios from 'axios';

function QuestionModal ({ productID, onClose }) {

  function submitQuestion(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    let body = e.target[0].value;
    let name = e.target[1].value;
    let email = e.target[2].value;
    axios.post('/addQuestion', {product_id: productID, body: body, name: name, email: email}).then((res) => {console.log('posted question: ', res.data)}).then(
      () => onClose()
    )
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
      <form onSubmit={submitQuestion}>
      <label>
        Your Question: <textarea name="myQuestion" placeholder="Question..." maxLength="1000" required/>
      </label>
      <br></br>
      <label>
        Your Display Name: <input name="myName" placeholder="Example: jackson11!" maxLength="60" required/>
      </label>
      <p>For privacy reasons, do not use your full name or email address</p>
      <label htmlFor="email">
        Your Email: <input type="email" name="myEmail" placeholder="Example: abc1@abc.com" maxLength="60" required/>
      </label>
      <br></br>
        <button type="submit">Submit Question</button>
      </form>
      <button onClick={onClose}>Close out</button>
    </div>
  );
}

export default QuestionModal;