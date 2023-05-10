import React, {useState, useEffect} from "react";
import axios from "axios";

function Characteristics ({currentProduct}) {
  const [characteristics, setCharacteristics] = useState([]);
  const [options, setOptions] = useState({});


  useEffect(() => {
    axios.post('/reviewMetadata', {product_id: currentProduct.id})
    .then((res) => {
      setCharacteristics(Object.keys(res.data.characteristics));
    })
  }, [])

  const handleOptionChange = (e, characteristic) => {
    setOptions((prevState) => ({
      ...prevState,
      [characteristic]: e.target.value,
    }));

  }

  return (
    <div className="characteristics-radio">Characteristics
            {characteristics.map((characteristic, index) => {
              return (
                <div key={index}>{characteristic}
                <label>
                <input
                  type="radio"
                  value="1"
                  checked={options[characteristic]==="1"}
                  onChange={(e) => handleOptionChange(e, characteristic)}
                />
                1
              </label>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={options[characteristic]==="2"}
                  onChange={(e) => handleOptionChange(e, characteristic)}
                />
                2
              </label>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={options[characteristic]==="3"}
                  onChange={(e) => handleOptionChange(e, characteristic)}
                />
                3
              </label>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={options[characteristic]==="4"}
                  onChange={(e) => handleOptionChange(e, characteristic)}
                />
                4
              </label>
              <label>
                <input
                  type="radio"
                  value="5"
                  checked={options[characteristic]==="5"}
                  onChange={(e) => handleOptionChange(e, characteristic)}
                />
                5
              </label>
                </div>)
            })}
          </div>
  )
}

export default Characteristics;