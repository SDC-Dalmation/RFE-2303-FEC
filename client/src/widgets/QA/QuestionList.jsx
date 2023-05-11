import React, {useState, useEffect} from "react";
import axios from 'axios';
import Question from './Question.jsx';
import QuestionSearch from './QuestionSearch.jsx';

function QuestionList ({questions, prodName, markHelpful, helpfulQA, setHelpfulQA}) {

  let [shownQuestions, setShownQuestions] = useState(questions.slice(0, 4));
  let [filterString, setFilterString] = useState("");

  const displayCSS = {
    color : "black",
  }

  const scrollCSS = {
    color : "black",
    height : "90vh",
    overflow : "auto",
  };

  let shownCSS = displayCSS;

  let additionalQuestionButton = (<div></div>);

  if (questions.length > 4) {
    additionalQuestionButton = (<span onClick={() => setShownQuestions(questions)}>More Answered Questions</span>);
    if (shownQuestions.length > 4) {
      shownCSS = scrollCSS;
      additionalQuestionButton = (<span onClick={() => setShownQuestions(questions.slice(0, 4))}>Collapse Question List</span>)
    }
  }

  let questionsToDisplay = shownQuestions;
  if (filterString.length > 3) {
    questionsToDisplay = shownQuestions.filter((question) => {
      console.log('QUESTIONN', question.question_body.toLowerCase());
      return question.question_body.toLowerCase().includes(filterString.toLowerCase());
    })
  }

  return(
    <div>
      <QuestionSearch filterString={filterString} setFilterString={setFilterString}/>
    <div id="questionList" style={shownCSS}>
      {questionsToDisplay.map((question, index) => {
        return (<Question question={question}
          prodName={prodName}
          markHelpful={markHelpful}
          helpfulQA={helpfulQA}
          setHelpfulQA={setHelpfulQA}
           key={index}/>)
      })}
    </div>
    <div>
      {additionalQuestionButton}
    </div>
    </div>
  );
}

export default QuestionList;