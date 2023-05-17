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
    borderTop: "solid 1px black",
    height: "750px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "95%"
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
          width: "30%",
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
          width: "80%",
          height: "100%"
        }}
        >
          <ReviewsList currentProduct={currentProduct}/>
        </div>
      </div>
    </div>
  );
}

export default RR;