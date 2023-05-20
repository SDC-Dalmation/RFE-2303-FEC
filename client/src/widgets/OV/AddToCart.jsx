import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AddToCart({selectedStyle, currentStyle, checkIfStyleChangedArr, checkIfProductChangedArr}) {

  const [currentSize, setCurrentSize] = useState('')
  const [currentQuantity, setCurrentQuantity] = useState(0)
  const [quantityArr, setQuantityArr] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)


  const addToCartBtnHandler = function(e) {
    e.preventDefault;
    var index = document.getElementById('size-selector').selectedIndex;
    var currentSku = Number(arrOfOptions[index][1][0]);
    axios.post('/postCartItem', {sku_id: currentSku}).catch((err)=>console.log(err))
    axios.get('/getCartItems').catch((err)=>console.log(err))
  }

  var arrOfOptions;

  const sizeSelectorHandler = function() {
    var size = document.querySelector('#size-selector');
    setCurrentSize(size.value)
    var index = document.getElementById('size-selector').selectedIndex;
    var placeholder = document.getElementById('placeholder')

    if (placeholder) {
      var num = 1
    } else {
      var num = 0;
    }
    setCurrentQuantity(arrOfOptions[index - num][1][1].quantity)
    setQuantityArr(quantityArrMaker(arrOfOptions[index - num][1][1].quantity))
    setFirstLoad(false);
  }

  const quantityArrMaker = function (num) {
    if (num > 15) {
      num = 15;
    }
    return Array.from({length: num}, (_, i) => i + 1)
  }

  useEffect(()=>{
    if (currentStyle) {
      arrOfOptions = Object.entries(Object.entries(currentStyle.skus));
      var index = document.getElementById('size-selector').selectedIndex;
      var selected = document.getElementById('size-selector').selectedOptions;
      var placeholder = document.getElementById('placeholder')
      if (placeholder) {
        var num = 1
      } else {
        var num = 0;
      }
      if (currentSize && firstLoad === false) {
        setCurrentQuantity(arrOfOptions[index - num][1][1].quantity)
        setQuantityArr(quantityArrMaker(arrOfOptions[index - num][1][1].quantity))
        setFirstLoad(true)
      }
    }
  }, checkIfStyleChangedArr)

  if (currentStyle) {
    arrOfOptions = Object.entries(Object.entries(currentStyle.skus))


    return(
      <div data-testid="addToCartMain" className="add-to-cart">
        <div className="size-selector-main">Size Selector
              {firstLoad ?
              <select id="size-selector" name="size selector" className="size-selector" onChange={sizeSelectorHandler}>
                <option id="placeholder" default>select size</option>
                {arrOfOptions.map((option, index) => {
                  if (option[1][1].quantity === 0 || option[1][1].quantity === null) {
                    return(
                      <option disabled>OUT OF STOCK</option>
                    )
                  } else {
                    return(
                      <option value={option[1][1].size} name={index}>{option[1][1].size}</option>
                    )
                  }
              })}</select> :
              <select id="size-selector" name="size selector" className="size-selector" onChange={sizeSelectorHandler}>
                {arrOfOptions.map((option, index) => {
                  if (option[1][1].quantity === 0 || option[1][1].quantity === null) {
                    return(
                      <option disabled>OUT OF STOCK</option>
                    )
                  } else if (option[1][1].size === currentSize) {
                    return(
                      <option value={option[1][1].size} name={index} selected>{option[1][1].size}</option>
                    )
                  } else {
                    return(
                      <option value={option[1][1].size} name={index}>{option[1][1].size}</option>
                    )
                  }
             })}
              </select>}
        </div>
        <div className='quantity-selector-main'>Quantity Selector
            <select id="quantity-selector" name="quantity selector" className="quantity-selector">
              {firstLoad ? <option disabled default>-</option> : quantityArr.map((num, index) => {return (<option>{num}</option>)})}
            </select>
        </div>
        {firstLoad ?  <button className="add-to-cart-btn" disabled>Add To Cart</button> :  <button className="add-to-cart-btn" onClick={addToCartBtnHandler} >Add To Cart</button>}
      </div>
    )
  } else {
    return(
      <div style={{'marginTop': '3px'}}>LOADING</div>
    )
  }
}

export default AddToCart;