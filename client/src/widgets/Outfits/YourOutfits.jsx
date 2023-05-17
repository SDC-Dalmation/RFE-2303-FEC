import React, {useState, useEffect} from "react";
import YourOutfitsEntry from "./YourOutfitsEntry.jsx"

const YourOutfits = ({currentProduct}) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || [])
  const [currentIndex2, setCurrentIndex2] = useState(1)
  const [length2, setLength2] = useState(items.length)
  const [listTranslateXIndex, setListTranslateXIndex] = useState(0);
  const showLeft = currentIndex2;
  const showRight = currentIndex2;

  useEffect(() => {
    setLength2(items.length)
  }, [items])

  const next = () => {
    if (currentIndex2 <= (length2 - 1)) {
        setCurrentIndex2(prevState => prevState + 1)
        setListTranslateXIndex(listTranslateXIndex-355);
    }
  }

  const prev = () => {
    if (currentIndex2 > 1) {
        setCurrentIndex2(prevState => prevState - 1)
        setListTranslateXIndex(listTranslateXIndex+355);
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
      <div style={{
        position: 'relative',
        display: 'flex',
        border: '1px solid black',
        borderRadius: 3,
        padding: 5,
        margin: 10,
        width: 1055,
        height: 'auto',
        overflow: 'hidden'
      }}>
        {showLeft > 1 ? <button style={{
          position: 'absolute',
          zIndex: 1,
          top: '50%',
          transform: `translateY(-50%)`,
          width: 60,
          height: 200,
          borderRadius: 5,
          backgroundColor: 'white',
          border: '1px solid #ddd',
          left: 0,
          fontSize: 30,
          fontWeight: 'bold',
          opacity: 0.7
        }} onClick={prev}>
        {"<"}
        </button> : null}
        <div onClick={addOutfit} style={{
                border: '1px solid grey',
                padding: 175,
                }}>
                  <div>
                    <div>+</div>
                    <br></br>
                    <div style={{position: 'absolute', left: 145, top: 200}}>{'Add to Outfit'}</div>
                  </div>
          </div>
          {items.map((item, index) => (
            <div key={index} style={{transform: `translateX(${listTranslateXIndex}px)`}}>
              {<YourOutfitsEntry item={item} items={items} setItems={setItems}/>}
            </div>
            )
          )}
        { showRight < length2 - 1 ?<button style={{
          position: 'absolute',
          zIndex: 1,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 60,
          height: 200,
          borderRadius: 5,
          backgroundColor: 'white',
          border: '1px solid #ddd',
          right: 0,
          fontSize: 30,
          fontWeight: 'bold',
          opacity: 0.7
        }} onClick={next}>
          {">"}
        </button> : null}
      </div>
    )
}

export default YourOutfits;