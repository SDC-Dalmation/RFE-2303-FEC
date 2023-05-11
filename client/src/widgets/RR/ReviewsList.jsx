import React, {useState, useEffect} from "react";
import axios from "axios";
import ReviewTile from "./ReviewTile.jsx";
import Sort from "./Sort.jsx";
import NewReview from "./NewReview.jsx";


function ReviewsList ({currentProduct}) {
  const [reviews, setReviews] = useState([]);
  const [limit, setLimit] = useState(2);
  var [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  useEffect(() => {
    axios.post('/listReviews', {product_id: currentProduct.id, sortType: "relevant"})
      .then((res) => {
        setReviews(res.data.results)
        })
  }, [])

  let handleMoreReviews = () => {
   setLimit(limit + 2);
  }

  return(
    <div>
      <div>
        <Sort currentProduct={currentProduct} reviews={reviews} setReviews={setReviews} />
        <div className="scrollable">
        {
          reviews.slice(0, limit).map((review, index) => {
            return (<ReviewTile key={index} review={review}/>)
          })
        }
        </div>
        <button onClick={handleMoreReviews}>More Reviews</button>
        <button onClick={handleClick}>New Review</button>
        {showModal ? <NewReview reviews={reviews} setReviews={setReviews} setShowModal={setShowModal} currentProduct={currentProduct}/>:null}
      </div>
    </div>
  );
}

export default ReviewsList;