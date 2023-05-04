import React, {useState, useEffect} from "react";
import QA from './widgets/QA/QA.jsx';
import OV from './widgets/OV/Overview.jsx';
import Outfit from './widgets/Outfits/Outfit.jsx';
import RR from './widgets/RR/RR.jsx';

function Product () {
  return(
    <div>
      <OV />
      <Outfit />
      <QA />
      <RR />
    </div>
  );
}

export default Product;