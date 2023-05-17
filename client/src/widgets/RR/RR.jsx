import React, {useState, useEffect} from "react";
import axios from "axios";
import RatingBreakdown from "./RatingBreakdown.jsx"
import ProductBreakdown from "./ProductBreakdown.jsx"
import ReviewsList from "./ReviewsList.jsx"

function RR ({currentProduct}) {


  return(
    <div className="RR"
    style={{
    marginTop: "10px",
    border: "solid 1px black",
    width: "65%",
    height: "550px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    }}
    >
      <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        marginLeft: "10%"
      }}
      >
        <h3>
        Ratings and Reviews
        </h3>
      </div>
      <div
      className="Breakdown-List"
      style={{
        display: "flex",
        width: "90%"
      }}
      >
        <div
        className="Breakdowns"
        style={{
          width: "200px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          margin: "0",
        }}
        >
          <RatingBreakdown currentProduct={currentProduct}/>
          <ProductBreakdown currentProduct={currentProduct}/>
        </div>
        <div
        className="Reviews-List"
        style={{
          marginLeft: "20px",
          width: "550px",
          height: "650px"
        }}
        >
          <ReviewsList currentProduct={currentProduct}/>
        </div>
      </div>
    </div>
  );
}

export default RR;