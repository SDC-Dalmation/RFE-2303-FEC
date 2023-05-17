import React, {useState, useEffect} from "react";
import Product from './Product.jsx';
import axios from 'axios';
import Logo from './Logo.png';

function Store () {

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [background, setBackground] = useState("#DEE4E7");
  const [color, setColor] = useState('black');
  const [modeName, setModeName] = useState("Dark Mode")

  useEffect(() => {axios.get('/listProducts')
  .then((res) => {
    setProducts(res.data);
    setCurrentProduct(res.data[0]);
  })
}, []);

  const changeMode = (e) => {
    e.preventDefault();
    setColor((color) => (
      color === 'black' ? "white" : "black"
    ))
    setBackground((color) => (
      color === "#DEE4E7" ? "#173057" : "#DEE4E7"
    ))
    setModeName((name) => (
      name === 'Dark Mode' ? "Light Mode" : "Dark Mode"
    ))
  }

  return(
    <div style={{background: background, color: color}}>
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
      <button onClick={changeMode}>{modeName}</button>
      <Product products={products} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
    </div>
  );
}

export default Store;