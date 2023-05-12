import React, {useState, useEffect} from "react";
import axios from "axios";

function RatingBreakdown ({currentProduct}) {
  const [ratingData, setRatingData] = useState({})

  useEffect(() => {
    axios.post('/reviewMetadata', {product_id: currentProduct.id})
    .then((res) => {
      console.log('review meta data: ', res.data.ratings);
      setRatingData(res.data.ratings);
    })
  }, [])

  const calculateAveRating = (ratingData) => {

  }
  return(
    <div className="Rating-Breakdown">
      <h4>Rating Breakdown</h4>
    </div>
  );
}

export default RatingBreakdown;