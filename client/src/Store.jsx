import React, {useState, useEffect} from "react";
import Product from './Product.jsx';
import axios from 'axios';

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
      <p>store</p>
      <Product products={products} currentProduct={currentProduct}/>
    </div>
  );
}

export default Store;