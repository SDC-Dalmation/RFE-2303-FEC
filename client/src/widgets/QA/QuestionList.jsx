import React, {useState, useEffect} from "react";
import axios from 'axios';
import Question from './Question.jsx';
import QuestionSearch from './QuestionSearch.jsx';
import PostAPIInteraction from "../PostAPIInteraction.jsx";

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
    "padding": "1vh",
    "width": "8vw",
    "border": "none",
    "textAlign": "center",
    "outline": "1px solid grey",
    "fontSize": "14px",
    "transition": "0.4s",
  };

  let [shownQuestions, setShownQuestions] = useState([]);

  useEffect(() => {
    setShownQuestions(questions.slice(0, 4));
  }, [questions])

  let [filterString, setFilterString] = useState("");

  const displayCSS = {
    marginBottom : "2vh",
    width: "99%",
  }

  const scrollCSS = {
    height : "90vh",
    marginBottom : "2vh",
    overflow : "auto",
    width: "99%",
  };

  let shownCSS = displayCSS;

  let additionalQuestionButton = (<div></div>);
  if (questions.length > 4) {
    additionalQuestionButton = (<span style={buttonStyle} onClick={() => {
      setShownQuestions(questions);
      PostAPIInteraction("Show More AnsweredQuestions", "Questions & Answers")}}>More Answered Questions</span>);
    if (shownQuestions.length > 4) {
      shownCSS = scrollCSS;
      additionalQuestionButton = (<span style={buttonStyle} onClick={() => {setShownQuestions(shownQuestions.slice(0, 4));
        PostAPIInteraction("Collapse AnsweredQuestions", "Questions & Answers")}}>Collapse Question List</span>)
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
      {additionalQuestionButton}
    </div>
  );
}

export default QuestionList;