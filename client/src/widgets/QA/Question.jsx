import React, {useState, useEffect} from "react";
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import { createPortal } from 'react-dom';
import AnswerModal from './AnswerModal.jsx';

function Question ({question, prodName}) {

  const [answers, setAnswers] = useState([]);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  useEffect(() => {
    setAnswers(Object.values(question.answers));
  }, []);


let displayAnswers = (<div></div>);
if (answers.length > 0) {
  displayAnswers = <AnswerList answers={answers} />
}

  return(
    <div>
      <div>
        Q: {question.question_body} | Helpful? Yes{`(${question.question_helpfulness})`} |
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