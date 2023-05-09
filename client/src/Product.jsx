import React, {useState, useEffect} from "react";
import QA from './widgets/QA/QA.jsx';
import OV from './widgets/OV/Overview.jsx';
import Outfit from './widgets/Outfits/Outfit.jsx';
import RR from './widgets/RR/RR.jsx';

function Product ({products, currentProduct, setCurrentProduct}) {

  // const [currentProduct, setCurrentProduct] = useState({});


  // setCurrentProduct(products[0]);


  // setCurrentProduct(products[0])
if (products.length > 0) {
  //console.log('all products: ', products);
  //console.log('current product ', currentProduct);

  return(
    <div>
      <button onClick={() => console.log(currentProduct)}>Current product</button>
      <OV currentProduct={currentProduct}/>
      <Outfit products={products} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
      <QA currentProduct={currentProduct}/>
      <RR currentProduct={currentProduct}/>
    </div>
  );
} else {
  return (<div>Loading...</div>)
}

}
export default Product;