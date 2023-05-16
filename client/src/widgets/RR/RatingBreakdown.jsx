import React, {useState, useEffect} from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";

function RatingBreakdown ({currentProduct}) {
  const [ratingData, setRatingData] = useState({})

  useEffect(() => {
    axios.post('/reviewMetadata', {product_id: currentProduct.id})
    .then((res) => {
      setRatingData(res.data.ratings);
    })
    .catch((err) => {
      console.log('err in receiving metadata: ', err);
    })
  }, [currentProduct])

  const calculateAveRating = (ratingData) => {
    let numerator = 0;
    let totalRatings = 0;

    for (let rating in ratingData) {
      totalRatings += Number(ratingData[rating]);
      numerator += (rating * Number(ratingData[rating]))
    }

   let average = totalRatings !== 0 ? (numerator / totalRatings) : 0;;

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


  let averageRating = calculateAveRating(ratingData);
  let displayAveRating = averageRating.toFixed(1);

  let starRating = averageRating;
  let oldDecimals = Number(starRating.toString()[2] + starRating.toString()[3]);
  let newDecimals;

  oldDecimals > 13 && oldDecimals <= 38
  ? newDecimals = 25
  : oldDecimals > 38 && oldDecimals <= 62
  ? newDecimals = 50
  : oldDecimals > 62 && oldDecimals <= 87
  ? newDecimals = 75
  : newDecimals = 0;

  let averageRatingRounded = Number(starRating.toString()[0] + "." + newDecimals.toString())

  if(starRating > 0) {
  return(
    <div
    className="Rating-Breakdown"
    >
      <div style={{display: "flex", marginLeft: "10px", height: "25%"}}>
        <h1>{displayAveRating}</h1>
        <div style={{marginTop: "20px", marginLeft: "5px"}}>
          <StarRatings
            rating={averageRatingRounded}
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
  } else {
    return (<div>Loading...</div>)
  }
}

export default RatingBreakdown;