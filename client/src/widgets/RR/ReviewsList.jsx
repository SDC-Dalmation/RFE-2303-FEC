import React, {useState, useEffect} from "react";
import axios from "axios";
import ReviewTile from "./ReviewTile.jsx";
import Sort from "./Sort.jsx";
import NewReview from "./NewReview.jsx";


function ReviewsList ({currentProduct}) {
  const [reviews, setReviews] = useState([]);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    axios.post('/listReviews', {product_id: currentProduct.id})
      .then((res) => {
        setReviews(res.data.results)
        })
  }, [])

  let handleMoreReviews = () => {
   setLimit(limit + 2);
  }

  return(
    <div>
      <h4>Reviews List</h4>
      <div>
        <Sort />
        <div className="scrollable">
        {
          reviews.slice(0, limit).map((review, index) => {
            return (<ReviewTile key={index} review={review}/>)
          })
        }
        </div>
        <button onClick={handleMoreReviews}>More Reviews</button>
        <NewReview />
      </div>
    </div>
  );
}

export default ReviewsList;