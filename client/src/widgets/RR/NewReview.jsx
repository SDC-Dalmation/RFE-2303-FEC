import React, {useState, useEffect} from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
import Characteristics from "./Characteristics.jsx";
import AddPhoto from "./AddPhoto.jsx";

function NewReview ({reviews, setReviews, setShowModal, currentProduct}) {
  const [rating, setRating] = useState(0);
  const [option, setOption] = useState("");
  const [recommend, setRecommend] = useState(false);
  const [charOptions, setCharOptions] = useState({});
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState([]);
  const [responses, setResponses] = useState({
    product_id: currentProduct.id,
    rating: null,
    summary: "summary",
    body: "",
    recommend: null,
    name: "",
    email: "",
    photos: [],
    characteristics: null
  })


  const changeRating = (newRating, name) => {
    setRating(newRating);
    let updatedResponse = {...responses, rating: newRating};
    setResponses(updatedResponse);
  }

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  }

  useEffect(() => {
    if (option === "Yes") {
      setRecommend(true);
      let updatedResponse = {...responses, recommend: true};
      setResponses(updatedResponse);
    } else {
      setRecommend(false);
      let updatedResponse = {...responses, recommend: false};
      setResponses(updatedResponse);
    }
  }, [option])

  const handleClose = () => {
    axios.post('/addReview', responses)
      .then((response) => {
        console.log('review posted: ', response);
      })
      .catch((err) => {
        console.log('Error in posting review: ', err);
      })
    setShowModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;

  }

  const handleSummaryChange = (e) => {
    var summaryText = e.target.value;
    setSummary(summaryText);
    let updatedResponse = {...responses, [e.target.name]: summaryText};
    setResponses(updatedResponse);
  }

  const handleBodyChange = (e) => {
    let bodyText = e.target.value;
    setBody(bodyText);
    let updatedResponse = {...responses, [e.target.name]: bodyText};
    setResponses(updatedResponse);
  }

  const handleNameChange = (e) => {
    let nameText = e.target.value;
    setName(nameText);
    let updatedResponse = {...responses, [e.target.name]: nameText};
    setResponses(updatedResponse);
  }

  const handleEmailChange = (e) => {
    let emailText = e.target.value;
    setEmail(emailText);
    let updatedResponse = {...responses, [e.target.name]: emailText};
    setResponses(updatedResponse);
  }

  const ratingText = {
    1: "Poor",
    2: "Fair",
    3: "Average",
    4: "Good",
    5: "Great"
  }

  return(
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
    >
     <div
     className="modal-content"
     style={{
      width: "80%",
      backgroundColor: "#fff"
     }}
     >
      <div
      className="modal-header"
      style={{
        padding: "10px"
      }}
      >
        <h4
        className="modal-title"
        style={{margin: "0"}}
        >
        Write Your Review</h4>
        <h5
        className="modal-subtitle"
        style={{margin: "0"}}
        >{`About the ${currentProduct.name}`}</h5>
      </div>
      <div
      className="modal-body"
      style={{
        padding: "10px",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee"
      }}
      >

        <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        >

          <div
          className="modal-rating"
          style={{
            display: "flex"
          }}
          >Overall rating
          <StarRatings
          rating={rating}
          changeRating={changeRating}
          starRatedColor="green"
          starEmptyColor="grey"
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="1px"
          />
          <div style={{"marginLeft": "10px"}}>{ratingText[rating]}</div>
          </div>

          <div className="recommend-radio">Do you recommend this product?
            <label>
              <input
                type="radio"
                value="Yes"
                name="recommend"
                checked={option==="Yes"}
                onChange={handleOptionChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="recommend"
                checked={option==="No"}
                onChange={handleOptionChange}
              />
              No
            </label>
          </div>
          <div
          className="characteristic-and-inputs"
          style={{
            display: "flex",
            flexDirection: "row"
          }}
          >
            <Characteristics
            currentProduct={currentProduct}
            charOptions={charOptions}
            setCharOptions ={setCharOptions}
            responses={responses}
            setResponses={setResponses}
            />

            <div
            className="add-review-inputs"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "40px",
              width: "75%"
            }}
            >
              <label style={{"marginTop": "10px"}}>Review Summary (60 characters max)</label>

              <input
              type="text"
              name="summary"
              value={summary}
              placeholder= "Example: Best purchase ever!"
              maxLength="60"
              onChange={handleSummaryChange}
              />

              <label style={{"marginTop": "10px"}}>
              Review Body (1000 characters max)
              </label>
              <input
              placeholder="Why did you like the product or not?"
              name="body"
              value={body}
              maxLength="1000"
              minLength="50"
              onChange={handleBodyChange}
              />

              <div style={{ fontSize: "small", marginBottom: "10px" }}>
              {body.length <= 50
                ? `Minimum required characters left: ${50 - body.length}`
                : "Minimum reached"}
              </div>

              <AddPhoto photos={photos} setPhotos={setPhotos} responses={responses} setResponses={setResponses}/>

              <label style={{"marginTop": "10px"}}>
              Username
              </label>
              <input
              placeholder="Example: jackson11!"
              name="name"
              value={name}
              maxLength="60"
              onChange={handleNameChange}
              />
              <div style={{"fontSize": "small", "marginBottom": "10px"}}>
              For privacy reasons, do not use your full name or email address
              </div>

              <label style={{"marginTop": "10px"}}>
              E-Mail
              </label>
              <input
              placeholder="Example: jackson11@email.com"
              name="email"
              value={email}
              maxLength="60"
              onChange={handleEmailChange}
              />
              <div style={{"fontSize": "small", "marginBottom": "10px"}}>
              For authentication reasons, you will not be emailed
              </div>
            </div>
          </div>
        </form>

      </div>
      <div
      className="modal-footer"
      style={{
        padding: "10px"
      }}
      >
        <button className="button" type="submit" onClick={handleClose}>Submit Review</button>
      </div>
     </div>
    </div>
  );
}

export default NewReview;