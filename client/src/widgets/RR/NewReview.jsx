import React, {useState, useEffect} from "react";

function NewReview ({reviews, setReviews, setShowModal, currentProduct}) {

  const handleClose = () => {
    setShowModal(false);
  }

  return(
    <div className="modal">
     <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Write Your Review</h4>
        <h5 className="modal-subtitle">{`About the ${currentProduct.name}`}</h5>
      </div>
      <div className="modal-body">
        <form>
          <div>Overall rating(stars)</div>
          <div>Do you recommend this product? Yes or No</div>
          <div>Characteristics</div>
          <input placeholder="enter summary"/>
          <input placeholder="enter review body"/>
          <div>photos</div>
          <input placeholder="enter name"/>
          <input placeholder="enter email"/>
        </form>
      </div>
      <div className="modal-footer">
        <button className="button" onClick={handleClose}>Submit Review</button>
      </div>
     </div>
    </div>
  );
}

export default NewReview;