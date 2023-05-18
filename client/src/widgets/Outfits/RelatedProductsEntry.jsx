import React, {useState, useEffect} from "react";
import axios from "axios"
import CompareModal from "./CompareModal.jsx"
import { createPortal } from 'react-dom';
import StarRatings from "react-star-ratings";
import PostAPIInteraction from "../PostAPIInteraction.jsx"

const RelatedProductsEntry = ({product, setCurrentProduct, currentProduct, oldProduct, setOldProduct}) => {
  const [productInfo, setProductInfo] = useState({});
  const [productStyle, setProductStyle] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [allRatingsObj, setAllRatingsObj] = useState(0)
  const [hasSale, setHasSale2] = useState(null)
  const checkIfProductChangedArr = [currentProduct]

  useEffect(() => {
    axios.post('/reviewMetadata', {
      product_id: product
    })
      .then((res) => {
        setAllRatingsObj(res.data.ratings)
    })
  }, checkIfProductChangedArr)

  useEffect(() => {
    axios.post('/productInformation', {
      product_id: product
    })
      .then((info) => {
        setProductInfo(info.data);
    })
  }, [product, oldProduct])

  useEffect(() => {
    axios.post('/productStyles', {
      product_id: product
    })
      .then((info) => {
        setProductStyle(info.data.results[0].photos[0].thumbnail_url);
        setHasSale2(info.data.results[0].sale_price)
    })
  }, [product, oldProduct])

  const changeProduct = () => {
    PostAPIInteraction("Change Product in RelatedProductsEntry.jsx", "Outfits")
    axios.post('/productInformation', {
      product_id: product
    })
      .then((info) => {
        setCurrentProduct(info.data);
        setOldProduct(info.data)
    })
  }

  const openModal = () => {
    PostAPIInteraction("Open Modal in RelatedProductsEntry.jsx", "Outfits")
    setShowModal(!showModal);
  };

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
    var newMainNum;
    if (oldDecimals >= 0 && oldDecimals <= 13) {
      newDecimals = 0;
      newMainNum = averageRating.toString()[0]
    } else if (oldDecimals > 13 && oldDecimals <= 38) {
      newMainNum = averageRating.toString()[0]
      newDecimals = 25;
    } else if (oldDecimals > 38 && oldDecimals <= 62) {
      newMainNum = averageRating.toString()[0]
      newDecimals = 50;
    } else if (oldDecimals > 62 && oldDecimals <= 87) {
      newMainNum = averageRating.toString()[0]
      newDecimals = 75;
    } else if (oldDecimals > 87 && oldDecimals <= 99) {
      newDecimals = 0;
      newMainNum =  Number(averageRating.toString()[0]) + 1
    }
    var averageRatingRounded = Number(newMainNum.toString() + '.' + newDecimals.toString())
  }

  if (productStyle) {
    return (
      <div data-testid="inStock" style={{
        border: '1px solid grey',
        position: 'relative'
        }} >
          <div>
          <img onClick={openModal} style={{width: 20, height: 20, position: 'relative', float: "right"}} src={'https://t3.ftcdn.net/jpg/01/82/37/42/360_F_182374246_4f3x34AyBdCii4kGtK6s8PNT4AVYgHRa.jpg'}/>
          {showModal &&
            createPortal(<CompareModal showModal={showModal} setShowModal={setShowModal} product={product} oldProduct={oldProduct}/>,
            document.getElementById("modal"))
          }
          </div>
          <div data-testid="changeProduct" onClick={changeProduct}>
            <img style={{width: 350, height: 350}} src={productStyle}/>
            <div style={{fontSize: 20}}>{productInfo.category}</div>
            <div style={{fontSize: 25, fontWeight: 'bold'}}>{productInfo.name}</div>
            {hasSale === null ? <div style={{fontSize: 20}}>{`$${productInfo.default_price}`}</div> :
            <div>
              <div style={{fontSize: 20, textDecoration: 'line-through'}}>{`$${productInfo.default_price}`}</div>
              <div style={{fontSize: 20, color: 'red'}}>{`$${hasSale}`}</div>
            </div>}
            <div>
            <StarRatings
              name="average-rating"
              editing='false'
              starCount={5}
              rating={averageRatingRounded}
              starRatedColor="green"
              starEmptyColor="grey"
              starSpacing="3px"
              starDimension="20px"
            />
            </div>
          </div>
      </div>
    )
  } else {
    return (
      <div data-testid="soldOut" style={{
        border: '1px solid grey',
        position: 'relative',
        }} >
          <div>
          <img onClick={openModal} style={{width: 20, height: 20, position: 'relative', float: "right"}} src={'https://t3.ftcdn.net/jpg/01/82/37/42/360_F_182374246_4f3x34AyBdCii4kGtK6s8PNT4AVYgHRa.jpg'}/>
          {showModal &&
            createPortal(<CompareModal showModal={showModal} setShowModal={setShowModal} product={product} currentProduct={currentProduct} oldProduct={oldProduct}/>,
            document.getElementById("modal"))
          }
          </div>
          <div onClick={changeProduct}>
            <img style={{width: 350, height: 350}} src={'https://previews.123rf.com/images/roxanabalint/roxanabalint1904/roxanabalint190400154/123529842-temporarily-out-of-stock-sign-or-stamp-on-white-background-vector-illustration.jpg'}/>
            <div style={{fontSize: 20}}>{productInfo.category}</div>
            <div style={{fontSize: 25, fontWeight: 'bold'}}>{productInfo.name}</div>
            {hasSale === null ? <div style={{fontSize: 20}}>{`$${productInfo.default_price}`}</div> :
            <div>
              <div style={{fontSize: 20, textDecoration: 'line-through'}}>{`$${productInfo.default_price}`}</div>
              <div style={{fontSize: 20, color: 'red'}}>{`$${hasSale}`}</div>
            </div>}
            <div>
            <StarRatings
              name="average-rating"
              editing='false'
              starCount={5}
              rating={averageRatingRounded}
              starRatedColor="green"
              starEmptyColor="grey"
              starSpacing="3px"
              starDimension="20px"
            />
            </div>
          </div>
      </div>
    )
  }
}

export default RelatedProductsEntry;