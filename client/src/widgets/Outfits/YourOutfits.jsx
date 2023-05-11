import React, {useState, useEffect} from "react";
import YourOutfitsEntry from "./YourOutfitsEntry.jsx"

const YourOutfits = ({currentProduct}) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOutfit = () => {
    var test = items.map(item => {
      return item.id
    })
    if (items.length === 0 || !test.includes(currentProduct.id)) {
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
      padding: 100}} >
        <div onClick={addOutfit}>
        {'+'}
        </div>
        </div>
        {items.map((item, index) => (
          <YourOutfitsEntry key={index} item={item} items={items} setItems={setItems}/>
        ))}
      </div>
    )
  } else {
    return (
      <div data-testid="addOutfit" style={{
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