import React from "react";

const YourOutfits = () => {
  const message = () => {
    alert(`Stop clicking me! I'm not finished >:(`)
  }

  return (
    <div onClick={() => message()}>
      <span style={{
        display: 'inline-block',
        border: '1px solid grey',
        padding: 100}}>
        +
      </span>
    </div>
  )
}

export default YourOutfits;