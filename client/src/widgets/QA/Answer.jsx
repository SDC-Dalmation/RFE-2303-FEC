import React, {useState, useEffect} from "react";
import axios from 'axios';

function Answer ({answer, markHelpful, helpfulQA, setHelpfulQA}) {

  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  let [reported, changeReport] = useState(false);

  let reportTracker = (<span onClick={() => {reportAnswer()}}> Report </span>);
  if (reported) {
    reportTracker = (<span> Reported </span>);
  }

  const markAnswerHelpful = function () {
    if (markHelpful(answer.id, helpfulQA, setHelpfulQA)) {
      axios.post(`/markAnswerHelpful`, {answer_id: answer.id})
      .then(() => setHelpfulness(helpfulness + 1));
    }
  }

  const reportAnswer = function () {
    changeReport(true);
    axios.post('/reportAnswer', {
        answer_id: answer.id
      })
  }

  let answerDate = new Date(answer.date);
  const months = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];

  return(
    <div>
      <div>
        A: {answer.body}
      </div>
      <div>
        by {answer.answerer_name}, {months[answerDate.getMonth()]} {answerDate.getDate()}, {answerDate.getFullYear()} |
        <span onClick={() => {markAnswerHelpful()}}> Helpful? Yes{`(${helpfulness})`}</span> |
        {reportTracker}
      </div>
      <div>
        {answer.photos.map((picture, index) => {
          return (<img src={picture} height="50px" key={index}></img>)
        })}
      </div>
    </div>
  );
}

export default Answer;