import React, {useState, useEffect} from "react";
import axios from "axios";
import RatingBreakdown from "./RatingBreakdown.jsx"
import ProductBreakdown from "./ProductBreakdown.jsx"
import ReviewsList from "./ReviewsList.jsx"

function RR ({currentProduct}) {
  const [metaData, setMetaData] = useState();

  useEffect(() => {
    axios.post('/reviewMetadata', {product_id: currentProduct.id})
    .then((res) => {
      setMetaData(res.data);
    })
    .catch((err) => {
      console.log('err in receiving metadata: ', err);
    })

  }, [currentProduct])



  return(
    <div className="RR"
    style={{
    marginTop: "10px",
    borderTop: "solid 1px black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
    height: "50%"
    }}
    >
      <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        marginLeft: "10%"
      }}
      >
        <h3>
        Ratings and Reviews
        </h3>
      </div>
      <div
      className="Breakdown-List"
      style={{
        display: "flex",
        width: "90%"
      }}
      >
        <div
        className="Breakdowns"
        style={{
          width: "50%",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          margin: "0",
        }}
        >
          <RatingBreakdown currentProduct={currentProduct} metaData={metaData}/>
          <ProductBreakdown currentProduct={currentProduct} metaData={metaData}/>
        </div>
        <div
        className="Reviews-List"
        style={{
          marginLeft: "20px",
          width: "80%",
          height: "100%"
        }}
        >
          <ReviewsList currentProduct={currentProduct} metaData={metaData}/>
        </div>
      </div>
    </div>
  );
}

export default RR;