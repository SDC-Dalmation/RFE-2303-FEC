import React, {useEffect, useState} from 'react';

function AddToCart({currentStyle}) {

  // definitely a better way to do this, went a lil crazy with useState
  const [currentSize, setCurrentSize] = useState('')
  const [currentQuantity, setCurrentQuantity] = useState(0)
  const [quantityArr, setQuantityArr] = useState(['-'])
  const [firstLoad, setFirstLoad] = useState(true)


  if (currentStyle) {
    // creates array of the object of SKUs
    var arrOfOptions = Object.entries(Object.entries(currentStyle.skus))


    // creates an array of numbers based on the quantity
    const quantityArrMaker = function (num) {
      if (num > 15) {
        num = 15;
      }
      return Array.from({length: num}, (_, i) => i + 1)
    }

    // This function grabs the value of the size selector and sets the currentSize state
    // it then sets the currentQuantity based on which size was selected
    const sizeSelectorHandler = function() {
        var size = document.querySelector('#size-selector');
        setCurrentSize(size.value)
        var index = document.getElementById('size-selector').selectedIndex;
        if (index !== 0) {
          if (firstLoad) {
            var num = 1;
          } else {
            var num = 0;
          }
          setCurrentQuantity(arrOfOptions[index - num][1][1].quantity)
          setQuantityArr(quantityArrMaker(arrOfOptions[index - num][1][1].quantity))
        }
        setFirstLoad(false);
    }


    return(
      <div>
        <div style={{'marginTop': '3px'}}>Size Selector</div>
          <div>
            <select id="size-selector" name="size selector" onChange={sizeSelectorHandler}>
              {/* if its the first load, it will start on an empty selection */}
              {firstLoad ? <option></option> : null}
              {arrOfOptions.map((option, index) => {
                if (option[1][1].quantity === 0) {
                  return(
                    <option disabled>OUT OF STOCK</option>
                  )
                } else {
                  return(
                    <option value={option[1][1].size} name={index}>{option[1][1].size}</option>
                  )
                }
              })}
            </select>
        </div>
        <div style={{'marginTop': '3px'}}>Quantity Selector</div>
          <div>
            <select id="quantity-selector" name="quantity selector" >
              {quantityArr.map((num, index) => {
                if (num === '-') {
                  return (
                    <option disabled>{num}</option>
                  )
                } else {
                  return (
                    <option>{num}</option>
                  )
                }
              })}
            </select>
        </div>
        <button style={{'marginTop': '3px'}}>Add To Cart</button>
      </div>
    )
  } else {
    return(
      <div style={{'marginTop': '3px'}}>LOADING</div>
    )
  }
}

export default AddToCart;