import React, {useState, useEffect} from "react";
import QA from './widgets/QA/QA.jsx';
import OV from './widgets/OV/Overview.jsx';
import Outfit from './widgets/Outfits/Outfit.jsx';
import RR from './widgets/RR/RR.jsx';

function Product ({products, currentProduct, setCurrentProduct}) {

  const[num, setNum] = useState(0)

  // const [currentProduct, setCurrentProduct] = useState({});


  // setCurrentProduct(products[0]);


  // setCurrentProduct(products[0])
if (products.length > 0) {
  //console.log('all products: ', products);
  //console.log('current product ', currentProduct);


  return(
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
    >
      <button className="next-product-btn" onClick={() => {
        console.log(num)
        console.log(products[num])
        if (num === 0) {
          setCurrentProduct(products[8])
          setNum(1)
        } else if (num === 1) {
          setCurrentProduct(products[3])
          setNum(2)
        } else if (num === 2) {
          setCurrentProduct(products[7])
          setNum(0)
        }
      }}>next product</button>
      <OV currentProduct={currentProduct}/>
      <div>
      <Outfit products={products} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
      </div>
      <QA currentProduct={currentProduct}/>
      <RR currentProduct={currentProduct}/>
    </div>
  );
} else {
  return (<div>Loading...</div>)
}

}
export default Product;