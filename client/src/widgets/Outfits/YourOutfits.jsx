import React, {useState, useEffect} from "react";
import YourOutfitsEntry from "./YourOutfitsEntry.jsx"

const YourOutfits = ({currentProduct}) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOutfit = () => {
    var test = items.forEach(item => {
      if (item.id === currentProduct.id)
        return true;
    })
    if (items.length === 0 || test) {
      setItems([...items, currentProduct])
    }
  }

  if (items.length > 0) {
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'auto',
        flexDirection: 'row'}} onClick={addOutfit}>
        <div style={{
      border: '1px solid grey',
      padding: 100}} onClick={addOutfit}>
        {'+'}
        </div>
        {items.map((item, index) => (
          <YourOutfitsEntry key={index} item={item}/>
        ))}
      </div>
    )
  } else {
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'auto',
        flexDirection: 'row'}}>
        <div style={{
      border: '1px solid grey',
      padding: 100}} onClick={addOutfit}>
        {'+'}
        </div>
      </div>
    )
  }
}

export default YourOutfits;