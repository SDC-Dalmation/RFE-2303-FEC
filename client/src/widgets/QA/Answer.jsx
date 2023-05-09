import React, {useState, useEffect} from "react";
import axios from 'axios';

function Answer ({answer}) {

  let answerDate = new Date(answer.date);
  const months = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];

  return(
    <div>
      <div>
        A: {answer.body}
      </div>
      <br></br>
      <div>
        by {answer.answerer_name}, {months[answerDate.getMonth()]} {answerDate.getDate()}, {answerDate.getFullYear()} |
        Helpful? Yes{`(${answer.helpfulness})`} |
        Report
      </div>
    </div>
  );
}

export default Answer;