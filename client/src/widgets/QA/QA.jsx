import React, {useState, useEffect} from "react";
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import QuestionModal from './QuestionModal.jsx';
import { createPortal } from 'react-dom';


function QA ({currentProduct}) {

  const titleStyle = {
    borderTop: "2px solid black",
    paddingTop: "2vh",
    fontSize: "20px",
    fontFamily: "Arial",
    justifyContent: "left",
    alignItems: "flex-start",
    width: "90%"
  }

  const buttonStyle = {
    "alignSelf": "start",
    "backgroundColor" : "rgb(216,216,216)",
    "cursor": "pointer",
    "display": "inline",
    "fontFamily": "Arial",
    "padding": "1vh",
    "marginLeft": "5%",
    "width": "12vw",
    "border": "none",
    "textAlign": "center",
    "outline": "none",
    "fontSize": "14px",
    "transition": "0.4s",
  };

  const componentBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "1vh",
    paddingBottom: "3vh",
  };

  const [questions, setQuestions] = useState([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [helpfulQA, setHelpfulQA] = useState(JSON.parse(localStorage.getItem('helpfulQA')) || []);

  useEffect(() => {axios.get(`/listQuestions/${currentProduct.id}`)
  .then((res) => {
    setQuestions(res.data.results);
  })
}, [currentProduct]);

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
      <div style={componentBoxStyle}>
        <h3 style={titleStyle}>Questions & Answers</h3>
        <QuestionList questions={questions}
          prodName={currentProduct.name}
          markHelpful={markHelpful}
          helpfulQA={helpfulQA}
          setHelpfulQA={setHelpfulQA}
          currentProduct={currentProduct}/>
        <span style={buttonStyle} onClick={() => setShowQuestionModal(true)}>Add a Question</span>
          {showQuestionModal && createPortal(
            <QuestionModal productID={currentProduct.id} onClose={() => setShowQuestionModal(false)}
            prodName={currentProduct.name}/>,
            document.getElementById("modal")
        )}
      </div>
    );
  }
  return(
    <div style={{alignItems: "left",}}>
      <span style={buttonStyle} onClick={() => setShowQuestionModal(true)}>Add a Question</span>
        {showQuestionModal && createPortal(
          <QuestionModal productID={currentProduct.id} onClose={() => setShowQuestionModal(false)}
          prodName={currentProduct.name}/>,
          document.getElementById("modal")
        )}
    </div>
  )

}

export default QA;