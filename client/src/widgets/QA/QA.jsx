import React, {useState, useEffect} from "react";
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import QuestionModal from './QuestionModal.jsx';
import { createPortal } from 'react-dom';

function QA ({currentProduct}) {

  const [questions, setQuestions] = useState([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [helpfulQA, setHelpfulQA] = useState(JSON.parse(localStorage.getItem('helpfulQA')) || []);

  useEffect(() => {axios.get(`/listQuestions/${currentProduct.id}`)
  .then((res) => {
    setQuestions(res.data.results);
  })
}, []);

  const markHelpful = function (itemID, helpfulQA, setHelpfulQA) {
    if (helpfulQA.includes(itemID)) {
      return false;
    }
    let allHelpfulQA = [...helpfulQA, itemID];
    setHelpfulQA(allHelpfulQA);
    localStorage.setItem('helpfulQA', JSON.stringify(allHelpfulQA));
    return true;
  }

  if (questions.length > 0) {

    return(
      <div>
        Questions & Answers
        <QuestionList questions={questions}
        prodName={currentProduct.name}
        markHelpful={markHelpful}
        helpfulQA={helpfulQA}
        setHelpfulQA={setHelpfulQA}/>
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