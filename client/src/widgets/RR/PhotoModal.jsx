import React, {useState, useEffect} from "react";

function PhotoModal ({review}) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const closeModal = () => {
    setSelectedPhoto(null);
  }

  const openModal = (photo) => {
    setSelectedPhoto(photo)
  }

  return (<div>
  {review.photos.length > 0 ? review.photos.map((photo, index) => {
    return (
      <div
      key={index}
      style={{ display: "inline-block" }}
      >
        <img
        src={photo.url}
        style={{
          width: "70px",
          height: "70px",
          objectFit: "cover",
          margin: "5px",
          cursor: "pointer"
        }}
        alt={`Photo ${index + 1}`}
        onClick={()=>{openModal(photo)}}
        />
      </div>
      )
  }): null}

  {selectedPhoto && (
    <div
    className="modal"
    style={{
      position: "fixed",
      left: "0",
      top: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
    onClick={closeModal}
    >
      <div
      className="photoModal"
      style={{
        display: "flex"
      }}
      >
        <span
        className="close"
        onClick={closeModal}
        style={{
          color: "white",
          cursor: "pointer",
          fontSize: "24px"
        }}>
        &times;
        </span>
        <img
        src={selectedPhoto.url}
        style={{
          width: "500px",
          height: "500px",
          objectFit: "cover"
        }}
        />
      </div>
    </div>
  )}
  </div>)
}

export default PhotoModal;