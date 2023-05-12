import React, {useState, useEffect} from "react";
import axios from 'axios';
import Answer from './Answer.jsx';

function AnswerList ({answers, markHelpful, helpfulQA, setHelpfulQA}) {

  // let [shownAnswers, setShownAnswers] = useState(answers.slice(0, 2));
  let [shownAnswers, setShownAnswers] = useState([]);

  useEffect(() => {
    setShownAnswers(answers.slice(0, 2));
  }, [answers]);

  const displayCSS = {
    color : "black",
  }

  const scrollCSS = {
    color : "black",
    height : "50vh",
    overflow : "auto",
  };

  let shownCSS = displayCSS;

  let additionalAnswerButton = (<div></div>);

  if (answers.length > 2) {
    additionalAnswerButton = (<span onClick={() => setShownAnswers(answers)}>More Answers</span>);
    if (shownAnswers.length > 2) {
      shownCSS = scrollCSS;
      additionalAnswerButton = (<span onClick={() => setShownAnswers(answers.slice(0, 2))}>Collapse Answer List</span>)
    }
  }


  return(
    <div>
    <div style={shownCSS}>
      {shownAnswers.map((answer, index) => {
        return (<Answer answer={answer} markHelpful={markHelpful} helpfulQA={helpfulQA}
          setHelpfulQA={setHelpfulQA} key={index}/>)
      })}
    </div>
    <div>
      {additionalAnswerButton}
    </div>
    </div>
  );
}

export default AnswerList;