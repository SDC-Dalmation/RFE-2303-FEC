import React, {useState, useEffect} from "react";
import axios from "axios";

const YourOutfitsEntry = ({item}) => {
  const [productStyle, setProductStyle] = useState({});

  useEffect(() => {
    axios.post('/productStyles', {
      product_id: item.id
    })
      .then((info) => {
        setProductStyle(info.data.results[0].photos[0].thumbnail_url);
    })
  }, [])

  return (
    <div style={{
      border: '1px solid grey',
      }}>
      <img style={{width: 200, height: 200}} src={productStyle}/>
      <div>{item.category}</div>
      <div>{item.name}</div>
      <div>{`$${item.default_price}`}</div>
    </div>
  )
}

export default YourOutfitsEntry