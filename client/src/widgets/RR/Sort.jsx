import React, {useState, useEffect} from "react";
import axios from "axios";

function Sort ({currentProduct, reviews, setReviews, metaData}) {
  const [value, setValue] = useState("relevant");
  const [reviewsNum, setReviewsNum] = useState(0);

useEffect(() => {

  if(metaData) {
    const recommended = metaData.recommended
    const total = Number(recommended.false) + Number(recommended.true);
    setReviewsNum(total);
  }
}, [metaData])

  const handleChange = (e) => {
    let newValue = e.target.value
    setValue(newValue);

    axios.post('/listReviews', {product_id: currentProduct.id, sortType: newValue})
      .then((res) => {
        setReviews(res.data.results)
        })
  }

  return(
    <div
    style={{
      marginBottom: "10px"
    }}
    >
      <label htmlFor="sortSelect">{`${reviewsNum} reviews sorted by:`}</label>
      <select id="sortSelect" value={value} onChange={handleChange}>
        <option value="relevant">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpfulness</option>
      </select>
    </div>
  );
}

export default Sort;