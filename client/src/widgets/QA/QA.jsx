import React, {useState, useEffect} from "react";
import axios from 'axios';
import QuestionList from './QuestionList.jsx';

function QA ({currentProduct}) {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {axios.get(`/listQuestions/${currentProduct.id}`)
  .then((res) => {
    setQuestions(res.data.results);
  })
}, []);

if (questions.length > 0) {

  return(
    <div>
      <QuestionList questions={questions}/>
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