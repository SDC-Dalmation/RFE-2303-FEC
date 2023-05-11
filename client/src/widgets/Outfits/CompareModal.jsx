import React, {useState, useEffect} from "react";
import axios from "axios";

const CompareModal = ({showModal, setShowModal, product, currentProduct, oldProduct}) => {
  const [currentCharacteristics, setCurrentCharacteristics] = useState([]);
  const [oldCharacteristics, setOldCharacteristics] = useState([]);
  const [totalCharacteristics, setTotalCharacteristics] = useState({});


  useEffect(() => {
    axios.post('/reviewMetadata', {
      product_id: product
    })
      .then((res) => {
        setCurrentCharacteristics(Object.entries(res.data.characteristics))
      })
  }, [])

  useEffect(() => {
    axios.post('/reviewMetadata', {
      product_id: oldProduct.id
    })
      .then((res) => {
        setOldCharacteristics(Object.entries(res.data.characteristics))
      })
  }, [])

  useEffect(() => {
    const characteristics = {}
    currentCharacteristics.forEach((characteristic) => {
      if (characteristics[characteristic[0]] === undefined) {
        characteristics[characteristic[0]] = {
          currentValue: characteristic[1].value.slice(0,4)
        }
      }
    })
    setTotalCharacteristics(characteristics)
    oldCharacteristics.forEach((characteristic) => {
      if (characteristics[characteristic[0]] === undefined) {
        characteristics[characteristic[0]] = {
          oldValue: characteristic[1].value.slice(0,4)
        }
      } else {
        characteristics[characteristic[0]].oldValue =
          characteristic[1].value.slice(0,4)

      }
    })
  }, [currentCharacteristics, oldCharacteristics])

  // const sortingFunction = (a,b) => {
  //   if (a[0] < b[0]) return -1;
  //   if (a[0] > b[0]) return 1;
  //   return 0;
  // }
  // console.log('old', oldCharacteristics.sort(sortingFunction))
  // console.log('current',currentCharacteristics.sort(sortingFunction))
  // console.log('total',Object.entries(totalCharacteristics));

  return (
    <div style={{
      zIndex: 1,
      width: 500,
      height: 500,
      background: 'white',
      border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '40%',
      left: '40%'
    }}>
      <button style={{width: 20, height: 20, position: 'absolute', right: 0, top: 0}} onClick={() => setShowModal(!showModal)}>X</button>
      <table>
        <thead>
          <tr>
            <th>{oldProduct.name}</th>
            <th>Characteristics</th>
            <th>{currentProduct.name}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(totalCharacteristics).sort().map((characteristic, index) =>
          <tr key={index}>
            <td>{characteristic[1].oldValue || null}</td>
            <td>{characteristic[0]}</td>
            <td>{characteristic[1].currentValue}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CompareModal;