import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Gallery from './Gallery.jsx';
import AddToCart from './AddToCart.jsx';

function Overview({currentProduct}) {

  const [currentStyle, setCurrentStyle] = useState(0);
  const [allProductStyles, setAllProductStyles] = useState([]);
  const [mainGalleryPic, setMainGalleryPic] = useState(0);

  const checkIfProductChangedArr = [currentProduct]


    // when the page renders, grab all the styles for this product and set the current style to be the first style in the list
  useEffect(()=>{axios.post('/productStyles', {product_id: currentProduct.id}).then((res)=>{setAllProductStyles(res.data.results); setCurrentStyle(res.data.results[0]);})},[])

  // might be a better way to do this, but this checks if the currentProduct has been changed at all
  useEffect(()=>{axios.post('/productStyles', {product_id: currentProduct.id}).then((res)=>{setAllProductStyles(res.data.results); setCurrentStyle(res.data.results[0]);})}, checkIfProductChangedArr)


  if (currentProduct) {
    return(
      <div>
        Overview
       <div style={{'display': 'flex', 'border': '1px solid black', 'borderRadius': '3px', 'padding': '5px'}} >
        <Gallery currentProduct={currentProduct} currentStyle={currentStyle} mainGalleryPic={mainGalleryPic} setMainGalleryPic={setMainGalleryPic} checkIfProductChangedArr={checkIfProductChangedArr}/>
        <div >
          <ProductInfo currentProduct={currentProduct} currentStyle={currentStyle} checkIfProductChangedArr={checkIfProductChangedArr}/>
          <StyleSelector currentProduct={currentProduct} setCurrentStyle={setCurrentStyle} allProductStyles={allProductStyles} setAllProductStyles={setAllProductStyles}/>
          <AddToCart />
        </div>
       </div>
      </div>
    )
  } else {
    return(
      <div>NO PRODUCT FOUND</div>
    )
  }
}

export default Overview;