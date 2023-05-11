import React, {useState, useEffect} from "react";
import axios from "axios";

const YourOutfitsEntry = ({item, items, setItems}) => {
  const [productStyle, setProductStyle] = useState({});

  useEffect(() => {
    axios.post('/productStyles', {
      product_id: item.id
    })
      .then((info) => {
        setProductStyle(info.data.results[0].photos[0].thumbnail_url);
    })
  })

  const deleteOutfit = (item) => {
    const filtered = items.filter((outfit) => {
      return outfit.id !== item.id
    })
    setItems(filtered);
  }

  return (
    <div style={{
      position: 'relative',
      border: '1px solid grey',
      }}>
      <button style={{position: 'absolute', right: 0, top: 0}}
      onClick={() => deleteOutfit(item)}>X</button>
      <img style={{width: 200, height: 200}} src={productStyle}/>
      <div>{item.category}</div>
      <div>{item.name}</div>
      <div>{`$${item.default_price}`}</div>
    </div>
  )
}

export default YourOutfitsEntry