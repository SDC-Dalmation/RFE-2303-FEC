import React, {useState, useEffect} from "react";
import axios from "axios";

function Characteristics ({currentProduct, charOptions, setCharOptions, responses, setResponses}) {
  const [characteristics, setCharacteristics] = useState([]);
  const [descriptions, setDescriptions] = useState({});
  const [details, setDetails] = useState({})

  useEffect(() => {
    axios.post('/reviewMetadata', {product_id: currentProduct.id})
    .then((res) => {
      const characteristicsData = res.data.characteristics;
      if(characteristicsData) {
        setCharacteristics(Object.keys(characteristicsData));
        setDetails(characteristicsData);
      }
    })
  }, [])


  //set initial descriptions to be none selected
  useEffect(() => {
    const initialDescriptions = {};
    characteristics.forEach((characteristic) => {
      initialDescriptions[characteristic] = "none selected"
    });
    setDescriptions(initialDescriptions)
  }, [characteristics])

  const handleOptionChange = (e, characteristic) => {
    const value = e.target.value;
    setCharOptions((prevState) => ({
      ...prevState,
      [details[characteristic].id.toString()]: Number(value),
    }));

    setDescription(characteristic, getDescription(characteristic, value));

    let updatedResponse = {...responses, characteristics: charOptions};
    setResponses(updatedResponse);
  }

  const setDescription = (characteristic, description) => {
    setDescriptions((prevState) => ({
      ...prevState,
      [characteristic]: description,
    }));
  };

  const getDescription = (characteristic, value) => {
    const tableDetails = {
      Size: ["A size too small", "1/2 a size too small", "Perfect", "1/2 a size too big", "A size too wide"],
      Width: ["Too narrow", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"],
      Comfort: ["Uncomfortable", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"],
      Quality: ["Too narrow", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
      Length: ["Runs Short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs long"],
      Fit: ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
    }
    //return value ? tableDetails[characteristic][value - 1]: "none selected";
    if (value) {
      return tableDetails[characteristic][value - 1];
    } else {
      return "none selected"
    }
  }

  return (
    <div
    className="characteristics-radio"
    style={{
      marginTop: "10px",
      marginBottom: "15px",
      width: "33%"
    }}
    >Characteristics
            {characteristics.map((characteristic, index) => {
              return (
                <div className="single-characteristic" key={index}>
                  <h4
                  className="characteristic-name"
                  style={{
                    marginBottom: "0px",
                    marginTop: "5px"
                  }}
                  >{characteristic}</h4>
                  <p>
                    {descriptions[characteristic]}
                  </p>

                  <div>
                  {[1, 2, 3, 4, 5].map((value) => {
                    return (
                      <label key={value}>
                        <input
                          type="radio"
                          value={value}
                          checked={charOptions[details[characteristic].id]===value}
                          onChange={(e) => handleOptionChange(e, characteristic)}
                        />
                        {value}
                      </label>
                    )
                  })}
                  </div>

                </div>)
            })}
          </div>
  )
}

export default Characteristics;