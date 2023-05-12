import React, {useState, useEffect} from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";

function RatingBreakdown ({currentProduct}) {
  const [ratingData, setRatingData] = useState({})

  useEffect(() => {
    axios.post('/reviewMetadata', {product_id: currentProduct.id})
    .then((res) => {
      console.log('review meta data: ', res.data.ratings);
      setRatingData(res.data.ratings);
    })
  }, [currentProduct])

  const calculateAveRating = (ratingData) => {

    let numerator = 0;
    let totalRatings = 0;

    for (let rating in ratingData) {
      totalRatings += Number(ratingData[rating]);
      numerator += (rating * Number(ratingData[rating]))
    }

   let average = totalRatings !== 0 ? (numerator / totalRatings).toFixed(1) : 0;;

    return average;
  }

  const totalRatings = (ratingData, num) => {
    let total = 0
    for (let rating in ratingData) {
      total += Number(ratingData[rating]);
    }
    var percent = Math.round((num * 100) / total);
    return `${percent}%`
  }

  console.log(totalRatings(ratingData, ratingData[1]))

  let averageRating = calculateAveRating(ratingData);
  let starRating = Math.round(averageRating)
  return(
    <div
    className="Rating-Breakdown"
    >
      <div style={{display: "flex", marginLeft: "10px", height: "25%"}}>
        <h1>{averageRating}</h1>
        <div style={{marginTop: "20px", marginLeft: "5px"}}>
          <StarRatings
            rating={starRating}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="1px"
            />
          </div>
        </div>
      {[5, 4, 3, 2, 1].map((num, i) => {
        return(
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div
            style = {{
              marginLeft: "10px",
              marginTop: "10px",
              fontSize: "small"
            }}
              >{num} stars</div>
              <div
              style={{
                height: "15px",
                width: "50%",
                backgroundColor: 'grey',
                marginTop: "10px",
                marginLeft: "10px",
                borderRadius: "5px"
              }}
              >
                <div
                style={{
                  height: "100%",
                  width: `${totalRatings(ratingData, ratingData[num])}`,
                  backgroundColor: 'blue',
                  borderRadius: "5px"
                }}
                >
                </div>
              </div>
              <div
              style={{
                marginLeft: "10px",
                marginTop: "10px",
                fontSize: "small"
              }}>{ratingData[num]}</div>
            </div>
        )
      })}
    </div>
  );
}

export default RatingBreakdown;