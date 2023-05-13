import React, {useState, useEffect} from "react";
import axios from "axios";

function AddPhoto ({photos, setPhotos}) {


  const [thumbnails, setThumbnails] = useState([])

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhotos(e.target.files);
    }
  }

  useEffect(() => {
    if(!photos) {
      return;
    }

    let temp = [];

    for (let i = 0; i < photos.length; i++) {
      temp.push(URL.createObjectURL(photos[i]));
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
      <label htmlFor="addPhoto">
      Add a Photo
      </label>

      <input
      type="file"
      accept="image/*"
      multiple
      onChange={handleFileChange}
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