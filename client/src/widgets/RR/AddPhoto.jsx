import React, {useState, useEffect} from "react";
import axios from "axios";

function AddPhoto ({photos, setPhotos, responses, setResponses}) {


  const [thumbnails, setThumbnails] = useState([])

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      var selectedFiles = Array.from(e.target.files).slice(0, 5);
      setPhotos(selectedFiles);
    }

  }

  useEffect(() => {
    if(!photos) {
      return;
    }

    let temp = [];

    const image = "https://media.cnn.com/api/v1/images/stellar/prod/200906155336-04-thompson-farm-sunflowers.jpg?q=x_2,y_112,h_898,w_1596,c_crop/h_540,w_960/f_webp"

    const imageArray = [];

    for (let i = 0; i < photos.length; i++) {
      temp.push(URL.createObjectURL(photos[i]));
      imageArray.push(image);
      let updatedResponse = {...responses, photos: imageArray};
      setResponses(updatedResponse);
    }

    const objectUrls = temp;
    setThumbnails(objectUrls);
  }, [photos])

  return (
    <div
    className="AddPhotoBtn"
    style={{
      display: "flex",
      flexDirection: "column"
    }}
    >
      <label
      htmlFor="image_uploads"
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
        borderRadius: "10px",
        width: "100px",
        backgroundColor: "rgb(240, 240, 240)",
        cursor: "pointer"
      }}
      >
      Add a Photo
      </label>

      <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept="image/*"
      multiple
      onChange={handleFileChange}
      style={{ display: "none" }}
      />

      <div
      style={{display: "flex", flexDirection: "row"}}
      >
      {thumbnails &&
        thumbnails.map((pic, i) => {
          return (
              <img
              key = {i}
              src={pic}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                margin: "5px",
              }}
              />
            )
        })
      }
      </div>
    </div>
  )
}

export default AddPhoto;