import React from 'react';

function AddToCart({currentStyle}) {

  if (currentStyle) {
    var arrOfOptions = Object.entries(Object.entries(currentStyle.skus))
    console.log(arrOfOptions)
    return(
      <div>
        <div style={{'marginTop': '3px'}}>Size Selector</div>
          <div>
            <select id="size-selector" name="size selector">
              {arrOfOptions.map((option, index) => {
                return(
                  <option>{option[1][1].size}</option>
                )
              })}
            </select>
        </div>
        <div style={{'marginTop': '3px'}}>Quantity Selector</div>
          <div>
            <select id="quantity-selector" name="quantity selector">
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
            </select>
        </div>
        <button style={{'marginTop': '3px'}}>Add To Cart</button>
      </div>
    )
  } else {
    return(
      <div>
        <div style={{'marginTop': '3px'}}>Size Selector</div>
          <div>
            <select id="size-selector" name="size selector">
              <option value="volvo">small</option>
              <option value="saab">medium</option>
              <option value="fiat">large</option>
            </select>
        </div>
        <div style={{'marginTop': '3px'}}>Quantity Selector</div>
          <div>
            <select id="quantity-selector" name="quantity selector">
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
            </select>
        </div>
        <button style={{'marginTop': '3px'}}>Add To Cart</button>
      </div>
    )
  }
}

export default AddToCart;