import React, {useState, useEffect} from "react";
import axios from "axios";

function ProductBreakdown ({currentProduct}) {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    axios.post('/reviewMetadata', {product_id: currentProduct.id})
    .then((res) => {
      setProductData(res.data.characteristics);
    })
  }, [currentProduct])

  let characteristics = Object.keys(productData);

  const calculateMargin = (productData, characteristic) => {
    if (characteristics.length > 0) {
      let characteristicData= productData[characteristic];
      let value = Number(characteristicData.value).toFixed(2);
      let percent = (value * 100) / 5;
      return `${percent}%`
    }
    return "0%"
  }

  return (
    <div className="Product-Breakdown">
      {Object.keys(productData).length > 0 ? (
        characteristics.map((characteristic, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              {characteristic}
            </div>

            <div
              className="product-bar"
              style={{
                height: "5px",
                width: "80%",
                backgroundColor: "grey",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              <div
                className="triangle"
                style={{
                  width: "0",
                  height: "0",
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "13px solid blue",
                  marginLeft: `${calculateMargin(productData, characteristic)}`
                }}
              >
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
  };

export default ProductBreakdown;