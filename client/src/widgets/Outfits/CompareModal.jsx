import React, {useState, useEffect} from "react";

const CompareModal = ({showModal, setShowModal, product}) => {
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
      compare
    </div>
  )
}

export default CompareModal;