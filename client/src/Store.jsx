import React, {useState, useEffect} from "react";
import Product from './Product.jsx';
import axios from 'axios';
import Logo from './Logo.png';

function Store () {

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {axios.get('/listProducts')
  .then((res) => {
    setProducts(res.data);
    setCurrentProduct(res.data[0]);
  })
}, []);


  return(
    <div>
      <div style={{display: "flex"}}>
        <img style={{width: '25wh', height: '25vh'}} src={Logo} />
        <div style={{
          fontSize: '6vh',
          fontFamily: 'Orbitron, sans-serif',
          display: "flex",
          alignItems: "center",
          color: "white",
          marginTop: "10px",
          textShadow: "2px 2px 4px #000000"
          }}>MART</div>
      </div>
      <Product products={products} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
    </div>
  );
}

export default Store;