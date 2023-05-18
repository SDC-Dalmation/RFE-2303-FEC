import React, {useState, useEffect} from "react";
import axios from 'axios';
import Answer from './Answer.jsx';
import PostAPIInteraction from "../PostAPIInteraction.jsx";

function AnswerList ({answers, markHelpful, helpfulQA, setHelpfulQA}) {

  let [shownAnswers, setShownAnswers] = useState([]);

  useEffect(() => {
    setShownAnswers(answers.slice(0, 2));
  }, [answers]);

  const displayCSS = {
  }

  const scrollCSS = {
    height : "50vh",
    overflow : "auto",
  };

  const buttonStyle = {
    "backgroundColor" : "rgb(216,216,216)",
    "color": "black",
    "cursor": "pointer",
    "display": "inline",
    "padding": "1vh",
    "width": "15%",
    "border": "none",
    "textAlign": "center",
    "outline": "1px solid grey",
    "fontSize": "10px",
    "transition": "0.4s",
  };

  let shownCSS = displayCSS;

  let additionalAnswerButton = (<div></div>);

  if (answers.length > 2) {
    additionalAnswerButton = (<span onClick={() => {setShownAnswers(answers);
      PostAPIInteraction("Show More Answers", "Questions & Answers")}} style={buttonStyle}>More Answers</span>);
    if (shownAnswers.length > 2) {
      shownCSS = scrollCSS;
      additionalAnswerButton = (<span onClick={() => {setShownAnswers(answers.slice(0, 2));
        PostAPIInteraction("Collapse Answers", "Questions & Answers")}} style={buttonStyle}>Collapse Answer List</span>)
    }
  }

  return(
    <div>
    <div style={shownCSS}>
      {shownAnswers.map((answer, index) => {
        return (<Answer answer={answer}
          markHelpful={markHelpful}
          helpfulQA={helpfulQA}
          setHelpfulQA={setHelpfulQA}
          key={index}/>)
      })}
    </div>
    <div>
      {additionalAnswerButton}
    </div>
    </div>
  );
}

export default AnswerList;