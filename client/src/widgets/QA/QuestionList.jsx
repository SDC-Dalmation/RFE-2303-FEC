import React, {useState, useEffect} from "react";
import axios from 'axios';
import Question from './Question.jsx';

function QuestionList ({questions, prodName, markHelpful, helpfulQA, setHelpfulQA}) {
  let questionSlice = questions.slice(0, 4);
  return(
    <div>
      {questionSlice.map((question, index) => {
        return (<Question question={question}
          prodName={prodName}
          markHelpful={markHelpful}
          helpfulQA={helpfulQA}
          setHelpfulQA={setHelpfulQA}
           key={index}/>)
      })}
    </div>
  );
}

export default QuestionList;