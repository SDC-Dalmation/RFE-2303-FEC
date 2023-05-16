import React, {useState, useEffect} from "react";
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import { createPortal } from 'react-dom';
import AnswerModal from './AnswerModal.jsx';

function Question ({question, prodName, markHelpful, helpfulQA, setHelpfulQA}) {

  const [answers, setAnswers] = useState([]);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);

  const bodyStyle = {
    fontFamily: "Arial",
    fontSize: "15px",
    marginBottom: "1vh",
  }

  const questionStyle = {
    width: "80%",
    border: "1px solid black",
    borderRadius: "1%",
    marginTop: "2vh",
    padding: "1vh",
    paddingBottom: "3vh",
  };

  const helperStyle = {
    float: "right",
    fontFamily: "Arial",
    fontSize: "8px",
  }

  const markHelpfulStyle = {
    "textDecoration" : "underline",
  }

  useEffect(() => {
    setAnswers(Object.values(question.answers));
  }, [question]);

  const markQuestionHelpful = function () {
    if (markHelpful(question.question_id, helpfulQA, setHelpfulQA)) {
      axios.get(`/markQuestionHelpful/${question.question_id}`)
      .then(() => setHelpfulness(helpfulness + 1));
    }
  }


  let displayAnswers = (<div></div>);
  if (answers.length > 0) {
    displayAnswers = <AnswerList
                       answers={answers}
                       markHelpful={markHelpful}
                       helpfulQA={helpfulQA}
                       setHelpfulQA={setHelpfulQA}/>
  }

  return(
    <div style={questionStyle}>
      <div style={{marginBottom: "1vh"}}>
        <span style={bodyStyle}>Q: {question.question_body}</span>
        <span style={helperStyle}>
          <span style={markHelpfulStyle} onClick={() => markQuestionHelpful()}> Helpful? Yes{`(${helpfulness})`}</span> |
          <span style={markHelpfulStyle} onClick={() => setShowAnswerModal(true)}> Add Answer</span>
        </span>
      </div>
      {displayAnswers}
      {showAnswerModal && createPortal(
        <AnswerModal questionID={question.question_id} onClose={() => setShowAnswerModal(false)}
        productName={prodName} questionBody={question.question_body}/>,
        document.getElementById("modal")
      )}
    </div>
  );
}

export default Question;