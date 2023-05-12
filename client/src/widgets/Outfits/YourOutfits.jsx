import React, {useState, useEffect} from "react";
import YourOutfitsEntry from "./YourOutfitsEntry.jsx"

const YourOutfits = ({currentProduct}) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])
  const [currentIndex2, setCurrentIndex2] = useState(0)
  const [length2, setLength2] = useState(items.length)

  useEffect(() => {
    setLength2(items.length)
  }, [items])

  const next = () => {
    if (currentIndex2 < (length2 - 1)) {
        setCurrentIndex2(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex2 > 0) {
        setCurrentIndex2(prevState => prevState - 1)
    }
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOutfit = (e) => {
    e.preventDefault()
    var test = items.map(item => {
      return item.id
    })
    if (items.length === 0 || !test.includes(currentProduct.id)) {
      setItems([...items, currentProduct])
    }
  }

    return (
      <div className="carousel-container"
      style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      }}>
      <div className="carousel-wrapper"
        style={{
        display: 'flex',
        width: '100%',
        position: 'relative',
        }}>
        <button style={{
          position: 'absolute',
          zIndex: 1,
          top: '50%',
          transform: `translateY(-50%)`,
          width: 24,
          height: 48,
          borderRadius: 5,
          backgroundColor: 'white',
          border: '1px solid #ddd',
          left: 24
        }} onClick={prev}>
        {"<"}
        </button>
        <div className="carousel-content-wrapper"
          style={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          }}>
            <div className="carousel-content"
              style={{
              display: 'flex',
              transition: 'all 250ms linear',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              width: '100%',
              flexShrink: 0,
              flexGrow: 1,
              transform: `translateX(-${currentIndex2 * 100}%)`,
              overflow: 'visible'
            }}>
              <div onClick={addOutfit} style={{
                border: '1px solid grey',
                padding: 100,
                }}>
                  {'+'}
              </div>
              {items.map((item, index) => (
                  <YourOutfitsEntry key={index} item={item} items={items} setItems={setItems}/>
                )
              )}
          </div>
        </div>
        <button style={{
          position: 'absolute',
          zIndex: 1,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 24,
          height: 48,
          borderRadius: 5,
          backgroundColor: 'white',
          border: '1px solid #ddd',
          right: 24
        }} onClick={next}>
          {">"}
        </button>
      </div>
    </div>
    )
}

export default YourOutfits;