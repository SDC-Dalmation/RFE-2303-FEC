import React, {useState, useEffect} from "react";
import axios from 'axios';

function QuestionList ({question}) {

  return(
    <div>
      Q: {question.question_body}
    </div>
  );
}

export default QuestionList;