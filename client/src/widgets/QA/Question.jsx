import React, {useState, useEffect} from "react";
import axios from 'axios';
import AnswerList from './AnswerList.jsx';

function Question ({question}) {

  const [answers, setAnswers] = useState([]);

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
        Q: {question.question_body} | Helpful? Yes{`(${question.question_helpfulness})`} | Add Answer
      </div>
      {displayAnswers}
    </div>
  );
}

export default Question;