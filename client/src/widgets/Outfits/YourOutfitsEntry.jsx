import React, {useState, useEffect} from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";

const YourOutfitsEntry = ({item, items, setItems}) => {
  const [productStyle, setProductStyle] = useState({});
  const [allRatingsObj, setAllRatingsObj] = useState(0);
  const [hasSale2, setHasSale2] = useState(null)
  const checkIfProductChangedArr = [item];

  useEffect(() => {
    axios.post('/reviewMetadata', {
      product_id: item.id
    })
      .then((res) => {
        setAllRatingsObj(res.data.ratings)
    })
  }, checkIfProductChangedArr)

  useEffect(() => {
    axios.post('/productStyles', {
      product_id: item.id
    })
      .then((info) => {
        setProductStyle(info.data.results[0].photos[0].thumbnail_url);
        setHasSale2(info.data.results[0].sale_price)
    })
  }, [items])

  const deleteOutfit = (e) => {
    e.preventDefault()
    const filtered = items.filter((outfit) => {
      return outfit.id !== item.id
    })
    setItems(filtered);
  }

  if (allRatingsObj) {
    var ratingsArr = Object.entries(allRatingsObj)
    var total = 0;
    var divider = 0;
    for (var i = 0; i < ratingsArr.length; i++) {
      total += Number(ratingsArr[i][0]) * Number(ratingsArr[i][1])
      divider += Number(ratingsArr[i][1])
    }
    var averageRating = total / divider;
    var oldDecimals = Number(averageRating.toString()[2] + averageRating.toString()[3])
    var newDecimals;
    if (oldDecimals >= 0 && oldDecimals <= 13) {
      newDecimals = 0;
    } else if (oldDecimals > 13 && oldDecimals <= 38) {
      newDecimals = 25;
    } else if (oldDecimals > 38 && oldDecimals <= 62) {
      newDecimals = 50;
    } else if (oldDecimals > 62 && oldDecimals <= 87) {
      newDecimals = 75;
    } else if (oldDecimals > 87 && oldDecimals <= 99) {
      newDecimals = 0;
    }
    var averageRatingRounded = Number(averageRating.toString()[0] + '.' + newDecimals.toString())
  }

  return (
    <div data-testid="YourOutfitsEntry" style={{
      position: 'relative',
      border: '1px solid grey',
      }}>
      <button style={{position: 'absolute', right: 0, top: 0}}
      onClick={deleteOutfit}>X</button>
      <img style={{width: 350, height: 350}} src={productStyle}/>
      <div style={{fontSize: 20}}>{item.category}</div>
      <div style={{fontSize: 25, fontWeight: 'bold'}}>{item.name}</div>
      {hasSale2 === null ? <div style={{fontSize: 20}}>{`$${item.default_price}`}</div> :
      <div>
        <div style={{fontSize: 20, color: 'red', textDecoration: 'line-through'}}>{`$${item.default_price}`}</div>
        <div style={{fontSize: 20}}>{`$${hasSale2}`}</div>
       </div>}
      <StarRatings
              name="average-rating"
              editing='false'
              starCount={5}
              rating={averageRatingRounded}
              starRatedColor="blue"
              starSpacing="3px"
              starDimension="20px"
            />
    </div>
  )
}

export default YourOutfitsEntry