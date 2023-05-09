import React, {useState, useEffect} from "react";
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import QuestionModal from './QuestionModal.jsx';
import { createPortal } from 'react-dom';

function QA ({currentProduct}) {

  const [questions, setQuestions] = useState([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  useEffect(() => {axios.get(`/listQuestions/${currentProduct.id}`)
  .then((res) => {
    setQuestions(res.data.results);
  })
}, []);


if (questions.length > 0) {

  return(
    <div>
      Questions & Answers
      <QuestionList questions={questions} prodName={currentProduct.name}/>
      <button onClick={() => setShowQuestionModal(true)}>Add a Question</button>
      {showQuestionModal && createPortal(
        <QuestionModal productID={currentProduct.id} onClose={() => setShowQuestionModal(false)}
        prodName={currentProduct.name}/>,
        document.getElementById("modal")
      )}
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