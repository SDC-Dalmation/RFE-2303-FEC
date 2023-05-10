import React, {useState, useEffect} from "react";
import axios from 'axios';
import Answer from './Answer.jsx';

function AnswerList ({answers, markHelpful, helpfulQA, setHelpfulQA}) {
  let answerSlice = answers.slice(0, 2);
  return(
    <div>
      {answerSlice.map((answer, index) => {
        return (<Answer answer={answer} markHelpful={markHelpful} helpfulQA={helpfulQA}
          setHelpfulQA={setHelpfulQA} key={index}/>)
      })}
    </div>
  );
}

export default AnswerList;