import React, {useState, useEffect} from "react";
import axios from "axios"
import CompareModal from "./CompareModal.jsx"
import { createPortal } from 'react-dom';

const RelatedProductsEntry = ({product, setCurrentProduct}) => {
  const [productInfo, setProductInfo] = useState({});
  const [productStyle, setProductStyle] = useState({});
  const [showModal, setShowModal] = useState(false);

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
        }} onClick={changeProduct}>
        <img onClick={openModal} style={{width: 20, height: 20, position: 'absolute', right: 0}} src={'https://t3.ftcdn.net/jpg/01/82/37/42/360_F_182374246_4f3x34AyBdCii4kGtK6s8PNT4AVYgHRa.jpg'}/>
        {showModal &&
          createPortal(<CompareModal showModal={showModal} setShowModal={setShowModal} product={product}/>,
          document.getElementById("modal"))
        }
        <img style={{width: 200, height: 200}} src={productStyle}/>
        <div>{productInfo.category}</div>
        <div>{productInfo.name}</div>
        <div>{`$${productInfo.default_price}`}</div>
      </div>
    )
  } else {
    return (
      <div style={{
        border: '1px solid grey',
        position: 'relative'
        }} onClick={changeProduct}>
        <img onClick={openModal} style={{width: 20, height: 20, position: 'absolute', right: 0}} src={'https://t3.ftcdn.net/jpg/01/82/37/42/360_F_182374246_4f3x34AyBdCii4kGtK6s8PNT4AVYgHRa.jpg'}/>
        {showModal &&
          createPortal(<CompareModal showModal={showModal} setShowModal={setShowModal} product={product}/>,
          document.getElementById("modal"))
        }
        <img style={{width: 200, height: 200}} src={'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png'}/>
        <div>{productInfo.category}</div>
        <div>{productInfo.name}</div>
        <div>{`$${productInfo.default_price}`}</div>
      </div>
    )
  }
}

export default RelatedProductsEntry;