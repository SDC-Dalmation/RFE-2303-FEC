import React, {useState, useEffect} from "react";
import axios from "axios"

const RelatedProductsEntry = ({product}) => {
  const [productInfo, setProductInfo] = useState({});
  const [productStyle, setProductStyle] = useState({});

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

  if (productStyle) {
    return (
      <div style={{
        border: '1px solid grey',
        }}>
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
        padding: 10}}>
        <img style={{width: 200, height: 200}} src={'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png'}/>
        <div>{productInfo.category}</div>
        <div>{productInfo.name}</div>
        <div>{`$${productInfo.default_price}`}</div>
      </div>
    )
  }
}

export default RelatedProductsEntry;