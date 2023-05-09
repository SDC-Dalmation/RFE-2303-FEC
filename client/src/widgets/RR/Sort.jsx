import React, {useState, useEffect} from "react";
import axios from "axios";

function Sort ({currentProduct, reviews, setReviews}) {
  const [value, setValue] = useState("relevant");

  const handleChange = (e) => {
    let newValue = e.target.value
    setValue(newValue);

    axios.post('/listReviews', {product_id: currentProduct.id, sortType: newValue})
      .then((res) => {
        setReviews(res.data.results)
        })
  }

  return(
    <div>
      <label>Sort By:</label>
      <select value={value} onChange={handleChange}>
        <option value="relevant">Relevant</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
      </select>
    </div>
  );
}

export default Sort;