import React, {useState, useEffect} from "react";
import axios from 'axios';

function Answer ({answer, markHelpful, helpfulQA, setHelpfulQA}) {

  // const [zoomedIn, setZoomedIn] = useState(false);
  const [zoomedImages, setZoomedImages] = useState(Array(answer.photos.length).fill(false));

  const bodyStyle = {
    fontSize: "12px",
    margin: "1vh",
    padding: "1vh",
  }

  const helperStyle = {
    fontSize: "8px",
    margin: "1vh",
    padding: "1vh",
  }

  // let imgStyle;
  // if (zoomedIn) {
  //   imgStyle = {
  //     margin: "2vh",
  //     transition: "transform 0.25s ease",
  //     transform: "scale(2)",
  //     cursor: "zoom-out",
  //   }} else {
  //     imgStyle = {
  //       margin: "2vh",
  //       transition: "transform 0.25s ease",
  //       cursor: "zoom-in",
  //     }
  // }

  let defaultImgStyle = {
    margin: "2vh",
    transition: "transform 0.25s ease",
    transform: "scale(2)",
    cursor: "zoom-out",
  }

  let zoomImgStyle = {
    margin: "2vh",
    transition: "transform 0.25s ease",
    cursor: "zoom-in",
  }

  const zoomImage = function (index) {
    let zoomedImagesCopy = zoomedImages.slice();
    zoomedImagesCopy[index] = !zoomedImagesCopy[index];
    setZoomedImages(zoomedImagesCopy);
  }



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
      <div style={bodyStyle}>
        A: {answer.body}
      </div>
      <div>
        {answer.photos.map((picture, index) => {
          return (
            <img src={picture} style={zoomedImages[index] ? defaultImgStyle : zoomImgStyle} height="50px" key={index} onClick={() => {zoomImage(index)}}></img>
          )
        })}
      </div>
      <div style={helperStyle}>
        by {answer.answerer_name}, {months[answerDate.getMonth()]} {answerDate.getDate()}, {answerDate.getFullYear()} |
        <span onClick={() => {markAnswerHelpful()}}> Helpful? Yes{`(${helpfulness})`}</span> |
        {reportTracker}
      </div>
    </div>
  );
}

export default Answer;