import React, {useState, useEffect} from "react";
import RatingBreakdown from "./RatingBreakdown.jsx"
import ProductBreakdown from "./ProductBreakdown.jsx"
import ReviewsList from "./ReviewsList.jsx"

function RR ({ currentProduct }) {
  return(
    <div className="RR">
      <h4>Ratings and Reviews</h4>
      <div className="Breakdown-List">
        <div className="Breakdowns">
          <RatingBreakdown />
          <ProductBreakdown />
        </div>
        <div className="Reviews-List">
          <ReviewsList />
        </div>
      </div>
    </div>
  );
}

export default RR;