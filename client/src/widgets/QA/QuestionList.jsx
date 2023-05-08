import React, {useState, useEffect} from "react";
import axios from 'axios';
import Question from './Question.jsx';

function QuestionList ({questions}) {
  let questionSlice = questions.slice(0, 6);
  return(
    <div>
      {questionSlice.map((question, index) => {
        return (<Question question={question} key={index}/>)
      })}
    </div>
  );
}

export default QuestionList;