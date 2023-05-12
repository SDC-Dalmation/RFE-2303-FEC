import React, {useState, useEffect} from "react";
import axios from "axios";
import RatingBreakdown from "./RatingBreakdown.jsx"
import ProductBreakdown from "./ProductBreakdown.jsx"
import ReviewsList from "./ReviewsList.jsx"

function RR ({currentProduct}) {


  return(
    <div className="RR">
      <h4>Ratings and Reviews</h4>
      <div className="Breakdown-List">
        <div className="Breakdowns">
          <RatingBreakdown currentProduct={currentProduct}/>
          <ProductBreakdown currentProduct={currentProduct}/>
        </div>
        <div className="Reviews-List">
          <ReviewsList currentProduct={currentProduct}/>
        </div>
      </div>
    </div>
  );
}

export default RR;