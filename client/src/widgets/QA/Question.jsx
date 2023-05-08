import React, {useState, useEffect} from "react";
import axios from 'axios';

function QuestionList ({question}) {

  return(
    <div>
      <div>
        Q: {question.question_body}
      </div>
      <div>
        Helpful? Yes{`(${question.question_helpfulness})`}
      </div>
      <div>
        Add Answer
      </div>
    </div>
  );
}

export default QuestionList;