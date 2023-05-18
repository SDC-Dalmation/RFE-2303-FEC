import React, {useState, useEffect} from "react";
import axios from "axios";
import PostAPIInteraction from "../PostAPIInteraction.jsx"

const CompareModal = ({showModal, setShowModal, product, oldProduct}) => {
  const [currentCharacteristics, setCurrentCharacteristics] = useState([]);
  const [oldCharacteristics, setOldCharacteristics] = useState([]);
  const [totalCharacteristics, setTotalCharacteristics] = useState({});
  const [currentProductName, setCurrentProductName] = useState('');

  useEffect(() => {
    axios.post('/productInformation', {
      product_id: product
    })
      .then((info) => {
        setCurrentProductName(info.data.name);
    })
  }, [])

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

  return (
    <div data-testid="CompareModal" style={{
      zIndex: 1,
      width: 600,
      height: 600,
      background: 'white',
      border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      flexDirection: 'column',
      top: '40%',
      left: '40%'
    }}>
      <button style={{width: 25, height: 25, position: 'absolute', right: 0, top: 0}} onClick={() => {setShowModal(!showModal);PostAPIInteraction("Closed compare modal in CompareModal.jsx", "Outfits")}}>X</button>
      <h2 style={{position: 'absolute', left: 5, top: 5}}>Comparing</h2>
      <table>
        <thead>
          <tr>
            <th style={{padding: 5, fontSize: 20, fontWeight: 'bold'}}>{oldProduct.name}</th>
            <th style={{padding: 5, fontSize: 20, fontWeight: 'bold'}}>Characteristics</th>
            <th style={{padding: 5, fontSize: 20, fontWeight: 'bold'}}>{currentProductName}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(totalCharacteristics).sort().map((characteristic, index) =>
          <tr key={index}>
            <td style={{padding: 5, fontSize: 15}}>{characteristic[1].oldValue || null}</td>
            <td style={{padding: 5, fontSize: 15}}>{characteristic[0]}</td>
            <td style={{padding: 5, fontSize: 15}}>{characteristic[1].currentValue}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CompareModal;