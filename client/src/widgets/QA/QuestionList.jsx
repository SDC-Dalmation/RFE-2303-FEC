import React, {useState, useEffect} from "react";
import axios from 'axios';
import Question from './Question.jsx';
import QuestionSearch from './QuestionSearch.jsx';

function QuestionList ({questions, prodName, markHelpful, helpfulQA, setHelpfulQA, currentProduct}) {
  const listStyle = {
    margin: "2vh",
    fontFamily: "Arial",
    width: "90%",
  }

  const buttonStyle = {
    "backgroundColor" : "rgb(216,216,216)",
    "color": "black",
    "cursor": "pointer",
    "display": "inline",
    "padding": "1vh",
    "width": "100%",
    "border": "none",
    "textAlign": "center",
    "outline": "none",
    "fontSize": "14px",
    "transition": "0.4s",
  };

  let [shownQuestions, setShownQuestions] = useState([]);

  useEffect(() => {
    setShownQuestions(questions.slice(0, 4));
  }, [questions])

  let [filterString, setFilterString] = useState("");

  const displayCSS = {
    color : "black",
    marginBottom : "2vh",
    width: "99%",
  }

  const scrollCSS = {
    color : "black",
    height : "90vh",
    marginBottom : "2vh",
    overflow : "auto",
    width: "99%",
  };

  let shownCSS = displayCSS;

  let additionalQuestionButton = (<div></div>);
  if (questions.length > 4) {
    additionalQuestionButton = (<span style={buttonStyle} onClick={() => {
      setShownQuestions(questions)}}>More Answered Questions</span>);
    if (shownQuestions.length > 4) {
      shownCSS = scrollCSS;
      additionalQuestionButton = (<span style={buttonStyle} onClick={() => setShownQuestions(shownQuestions.slice(0, 4))}>Collapse Question List</span>)
    }
  }

  let display = shownQuestions;
  if (filterString.length > 2) {
    display = questions;
  }


  return(
    <div style = {listStyle}>
      <QuestionSearch filterString={filterString} setFilterString={setFilterString}/>
    <div id="questionList" style={shownCSS}>
      {display.map((question, index) => {
        if (question.question_body.toLowerCase().includes(filterString.toLowerCase())) {
          return (<Question question={question}
            prodName={prodName}
            markHelpful={markHelpful}
            helpfulQA={helpfulQA}
            setHelpfulQA={setHelpfulQA}
            key={index}/>)
          }
      })}
    </div>
    <div>
      {additionalQuestionButton}
    </div>
    </div>
  );
}

export default QuestionList;