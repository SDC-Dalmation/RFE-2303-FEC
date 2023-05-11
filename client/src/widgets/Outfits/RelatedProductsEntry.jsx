import React, {useState, useEffect} from "react";
import axios from "axios"
import CompareModal from "./CompareModal.jsx"
import { createPortal } from 'react-dom';

const RelatedProductsEntry = ({product, setCurrentProduct, currentProduct}) => {
  const [productInfo, setProductInfo] = useState({});
  const [productStyle, setProductStyle] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [oldProduct, setOldProduct] = useState(currentProduct)
  useEffect(() => {
    axios.post('/productInformation', {
      product_id: product
    })
      .then((info) => {
        setProductInfo(info.data);
    })
  }, [])

  useEffect(() => {
    axios.post('/productStyles', {
      product_id: product
    })
      .then((info) => {
        setProductStyle(info.data.results[0].photos[0].thumbnail_url);
    })
  }, [])

  const changeProduct = () => {
    axios.post('/productInformation', {
      product_id: product
    })
      .then((info) => {
        setCurrentProduct(info.data);
    })
  }

  const openModal = () => {
    setShowModal(!showModal);
  };

  if (productStyle) {
    return (
      <div style={{
        border: '1px solid grey',
        position: 'relative'
        }} >
          <div>
          <img onClick={openModal} style={{width: 20, height: 20, position: 'relative', float: "right"}} src={'https://t3.ftcdn.net/jpg/01/82/37/42/360_F_182374246_4f3x34AyBdCii4kGtK6s8PNT4AVYgHRa.jpg'}/>
          {showModal &&
            createPortal(<CompareModal showModal={showModal} setShowModal={setShowModal} product={product} currentProduct={currentProduct} oldProduct={oldProduct}/>,
            document.getElementById("modal"))
          }
          </div>
          <div onClick={changeProduct}>
          <img style={{width: 200, height: 200}} src={productStyle}/>
          <div>{productInfo.category}</div>
          <div>{productInfo.name}</div>
          <div>{`$${productInfo.default_price}`}</div>
          </div>
      </div>
    )
  } else {
    return (
      <div style={{
        border: '1px solid grey',
        position: 'relative'
        }} >
          <div>
          <img onClick={openModal} style={{width: 20, height: 20, position: 'relative', float: "right"}} src={'https://t3.ftcdn.net/jpg/01/82/37/42/360_F_182374246_4f3x34AyBdCii4kGtK6s8PNT4AVYgHRa.jpg'}/>
          {showModal &&
            createPortal(<CompareModal showModal={showModal} setShowModal={setShowModal} product={product} currentProduct={currentProduct} oldProduct={oldProduct}/>,
            document.getElementById("modal"))
          }
          </div>
          <div onClick={changeProduct}>
          <img style={{width: 200, height: 200}} src={'https://previews.123rf.com/images/roxanabalint/roxanabalint1904/roxanabalint190400154/123529842-temporarily-out-of-stock-sign-or-stamp-on-white-background-vector-illustration.jpg'}/>
          <div>{productInfo.category}</div>
          <div>{productInfo.name}</div>
          <div>{`$${productInfo.default_price}`}</div>
          </div>
      </div>
    )
  }
}

export default RelatedProductsEntry;