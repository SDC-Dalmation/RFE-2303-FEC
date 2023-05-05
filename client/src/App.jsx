import React from "react";
import Store from "./Store.jsx";
import axios from 'axios';
// import {getProducts} from "../../server/helpers";


function App () {

  // axios.get('/listProducts').then((res) => {console.log('sent it, heres the data: ', res.data)})

  // axios.post('/productInformation', {product_id: 37311}).then((res) => {console.log('sent product_id, heres the product info: ', res.data)})

  // axios.post('/productStyles', {product_id: 37311}).then((res) => {console.log('here are the styles for that product: ', res.data)})

  // axios.post('/relatedProducts', {product_id: 37311}).then((res) => {console.log('here are the related products: ', res.data)})

  // axios.post('/listReviews', {product_id: 37311}).then((res) => {console.log('sent it, heres the reviews: ', res.data)})

  // axios.post('/markReviewHelpful', {review_id: 1279420}).then((res) => {console.log('marked review as helpful: ', res.data)})

  // axios.get('/getCartItems').then((res) => {console.log('sent it, these are all the cart items: ', res.data)})

  // axios.get('/listQuestions/37316').then((res) => {console.log('sent it, questions: ', res.data)})

  // axios.post('/reviewMetadata', {product_id: 37311}).then((res) => {console.log('sent metadata here: ', res.data)})

  // axios.post('/addReview', {
  //   product_id: 37311,
  //   rating: 5,
  //   summary: 'Yes',
  //   body: 'Yes',
  //   recommend: false,
  //   name: 'JSON',
  //   email: 'input@email.com',
  //   photos: ['input.photos', 'more photos'],
  //   characteristics: {'125033': 5, '125033':5, '125032':5, '125034':5}
  // }).then((res) => {console.log('review posted here: ', res.data)})

  // axios.get('/listAnswers/641943').then((res) => {console.log('sent it, answers: ', res.data)})

  // axios.post('/postCartItem', {sku_id: 1281038}).then((res) => {console.log('posted item to cart: ', res.data)})

  // axios.post('/addQuestion', {product_id: 37311, body: "Am I real?", name: "Socrates", email: "sock@greece.edu"}).then((res) => {console.log('posted question: ', res.data)})

  // axios.get('/markQuestionHelpful/641943').then((res) => {console.log('sent it, answers: ', res.data)})

  // axios.post('/markAnswerHelpful', {answer_id: 5987184}).then((res) => {console.log('marked answer as helpful: ', res.data)})

  //TODO: interaction axios.post request

  // axios.post('/addAnswer', {
  //  question_id: 641665,
  //  body: 'This is the answer for question id 641665',
  //  name: 'John Smith',
  //  email: 'jsmith@gmail.com',
  //  photos: []
  // }).then((res) => {console.log('posted answer: ', res.data)})


  // axios.post('/reportReview', {
  //   review_id: 1279420
  // }).then((res) => {console.log('reported review: ', res.data)})

  // axios.post('/reportAnswer', {
  //   answer_id: 5988249
  // }).then((res) => {console.log('reported review: ', res.data)})

  // axios.post('/reportQuestion', {
  //   question_id: 641943
  // }).then((res) => {console.log('reported question: ', res.data)})

  return(
    <div>
      <Store />
    </div>
  );
}

export default App;