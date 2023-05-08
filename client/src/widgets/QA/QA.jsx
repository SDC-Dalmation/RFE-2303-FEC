import React, {useState, useEffect} from "react";
import axios from 'axios';

function QA ({currentProduct}) {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {axios.get(`/listQuestions/${37316}`)
  .then((res) => {
    setQuestions(res.data.results);
  })
}, []);

if (questions.length > 0) {
  return(
    <div>
      Questions and Answers
      {questions[0].question_body}
    </div>
  );
}
return(
  <div>
    No Questions Yet... Add One!
  </div>
)

}

export default QA;