import React, {useState, useEffect} from "react";
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import { createPortal } from 'react-dom';
import AnswerModal from './AnswerModal.jsx';

function Question ({question, prodName, markHelpful, helpfulQA, setHelpfulQA}) {

  const [answers, setAnswers] = useState([]);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);

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
    displayAnswers = <AnswerList answers={answers} markHelpful={markHelpful} helpfulQA={helpfulQA} setHelpfulQA={setHelpfulQA}/>
  }

  return(
    <div>
      <div>
        Q: {question.question_body} | <span onClick={() => markQuestionHelpful()}> Helpful? Yes{`(${helpfulness})`}</span> |
        <span onClick={() => setShowAnswerModal(true)}> Add Answer</span>
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