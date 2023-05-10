import React, {useState, useEffect} from "react";
import axios from "axios";

function Characteristics ({currentProduct}) {
  const [characteristics, setCharacteristics] = useState([]);
  const [options, setOptions] = useState({});


  useEffect(() => {
    axios.post('/reviewMetadata', {product_id: currentProduct.id})
    .then((res) => {
      let characteristicIds = {};
      for (let characteristic in res.data.characteristics) {
        characteristicIds[characteristic] = res.data.characteristics[characteristic].id;
      }
      setCharacteristics(characteristicIds);
    })
  }, [])

  const handleOptionChange = (e, characteristic) => {
    const value = e.target.value;
    setOptions((prevState) => ({
      ...prevState,
      [characteristic]: value,
    }));
  }

  return (
    <div className="characteristics-radio">Characteristics
            {Object.keys(characteristics).map((characteristic, index) => {
              const id = characteristics[characteristic];
              return (
                <div key={id}>{characteristic}
                {[1, 2, 3, 4, 5].map((value) => {
                  return (
                    <label key={value}>
                      <input
                        type="radio"
                        value={value}
                        checked={options[id]===value.toString()}
                        onChange={(e) => handleOptionChange(e, id)}
                      />
                      {value}
                    </label>
                  )
                })}

                </div>)
            })}
          </div>
  )
}

export default Characteristics;