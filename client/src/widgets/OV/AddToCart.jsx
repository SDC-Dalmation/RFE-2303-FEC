import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AddToCart({selectedStyle, currentStyle, checkIfStyleChangedArr, checkIfProductChangedArr}) {

  // definitely a better way to do this, went a lil crazy with useState
  const [currentSize, setCurrentSize] = useState('')
  const [currentQuantity, setCurrentQuantity] = useState(0)
  const [quantityArr, setQuantityArr] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)


  const addToCartBtnHandler = function(e) {
    e.preventDefault;
    var index = document.getElementById('size-selector').selectedIndex;
    var currentSku = Number(arrOfOptions[index][1][0]);
    axios.post('/postCartItem', {sku_id: currentSku}).catch((err)=>console.log(err))
    axios.get('/getCartItems').then((res)=>{console.log('CART: ', res.data)})
  }

  var arrOfOptions;

  // This function grabs the value of the size selector and sets the currentSize state
  // it then sets the currentQuantity based on which size was selected

  const sizeSelectorHandler = function() {
    // grab the selector html element
    var size = document.querySelector('#size-selector');
    setCurrentSize(size.value)
    // get the index of the selected option
    var index = document.getElementById('size-selector').selectedIndex;
    // check if the placeholder is rendered
    var placeholder = document.getElementById('placeholder')

    if (placeholder) {
      var num = 1
    } else {
      var num = 0;
    }
    // set the quantity to be the same quantity as the selected style size
    setCurrentQuantity(arrOfOptions[index - num][1][1].quantity)
    // create an array of numbers based on the quantity, and make that array the quantityArr
    setQuantityArr(quantityArrMaker(arrOfOptions[index - num][1][1].quantity))
    // makes it so that the placeholders disappear
    setFirstLoad(false);
  }

  // creates an array of numbers based on the quantity
  const quantityArrMaker = function (num) {
    if (num > 15) {
      num = 15;
    }
    return Array.from({length: num}, (_, i) => i + 1)
  }

  // if the style changes, this will update the arrOfOptions, and update the quantity
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
    // creates array of the object of SKUs
    arrOfOptions = Object.entries(Object.entries(currentStyle.skus))


    return(
      <div data-testid="addToCartMain">
        <div style={{'marginTop': '3px'}}>Size Selector</div>
          <div>
              {/* if its the first load, it will start on an empty selection */}
              {firstLoad ?
              <select id="size-selector" name="size selector" onChange={sizeSelectorHandler}>
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
              <select id="size-selector" name="size selector" onChange={sizeSelectorHandler}>
                {arrOfOptions.map((option, index) => {
                  if (option[1][1].quantity === 0 || option[1][1].quantity === null) {
                    return(
                      <option disabled>OUT OF STOCK</option>
                    )
                  } else if (option[1][1].size === currentSize) {
                    return(
                      <option value={option[1][1].size} name={index} selected>{option[1][1].size}</option>
                      //! WILL NEED TO CHANGE THIS, REACT DOESNT LIKE IT ^^^^  'selected' does not work well with react
                    )
                  } else {
                    return(
                      <option value={option[1][1].size} name={index}>{option[1][1].size}</option>
                    )
                  }
             })}
              </select>}

        </div>
        <div style={{'marginTop': '3px'}}>Quantity Selector</div>
          <div>
            <select id="quantity-selector" name="quantity selector" >
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