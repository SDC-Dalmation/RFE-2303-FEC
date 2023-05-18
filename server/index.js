require("dotenv").config();
const express = require("express");
const path = require("path");

const helpers = require('./helpers.js');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));


// PRODUCTS ROUTES
app.get('/listProducts', (req, res) => {
  helpers.listProducts()
    .then((products) => {
      console.log('Products: ', products.data);
      res.send(products.data);
    })
})

app.post('/productInformation', (req, res) => {
  helpers.productInformation(req.body.product_id)
    .then((products) => {
      console.log('Product Information: ', products.data);
      res.send(products.data);
    })
})

app.post('/productStyles', (req, res) => {
  helpers.productStyles(req.body.product_id)
  .then((product) => {
    console.log('Product Styles: ', product.data);
    res.send(product.data);
  })
})

app.post('/relatedProducts', (req, res) => {
  helpers.relatedProducts(req.body.product_id)
  .then((products) => {
    console.log('Related Products: ', products.data);
    res.send(products.data);
  })
})


// REVIEWS ROUTES
app.post('/listReviews', (req, res) => {
  helpers.listReviews(req.body.product_id, req.body.sortType)
    .then((reviews) => {
      console.log('Reviews Information: ', reviews.data);
      res.send(reviews.data);
    })
})

app.post('/markReviewHelpful', (req, res) => {
  helpers.markReviewHelpful(req.body.review_id)
  .then((result) => {
    console.log('Marked Review as Helpful: ', result.data);
    res.send(result.data);
  })
})

app.post('/reviewMetadata', (req, res) => {
  helpers.reviewMetadata(req.body.product_id)
    .then((metadata) => {
      console.log('Reviews metadata: ', metadata.data);
      res.send(metadata.data);
    })
})

app.post('/addReview', (req, res) => {
  helpers.addReview(req.body)
    .then((review) => {
      send(review.data)
    })
    .catch((err) => {
      res.send(err);
    })
})

app.post('/reportReview', (req, res) => {
  helpers.reportReview(req.body.review_id)
    .then((result) => {
      console.log('reported review: ', result.data)
      res.send(result.data)
    })
})


// CART ROUTES
app.get('/getCartItems', (req, res) => {
  helpers.getCartItems()
    .then((cartItems) => {
      console.log('Cart: ', cartItems.data);
      res.send(cartItems.data);
    })
})

app.post('/postCartItem', (req, res) => {
  helpers.postCartItem(req.body.sku_id)
    .then((cartItem) => {
      console.log('Cart item posted: ', cartItem.data);
      res.send(cartItem.data);
    })
})


// Q&A ROUTES
app.get('/listQuestions/:product_id', (req, res) => {
  helpers.listQuestions(req.params.product_id)
    .then((questions) => {
      console.log('questions: ', questions.data);
      res.send(questions.data);
    })
})

app.get('/listAnswers/:question_id', (req, res) => {
  helpers.listAnswers(req.params.question_id)
    .then((answers) => {
      console.log('answers: ', answers.data);
      res.send(answers.data);
    })
})

app.post('/addQuestion', (req, res) => {
  helpers.addQuestion(req.body.product_id, req.body.body, req.body.name, req.body.email)
    .then((question) => {
      console.log('answers: ', question.data);
      res.send(question.data);
    })
})

app.post('/addAnswer', (req, res) => {
  helpers.addAnswer(req.body.question_id, req.body.body, req.body.name, req.body.email, req.body.photos)
    .then((answer) => {
      console.log('answer added: ', answer.data);
      res.send(answer.data);
    })
})

app.get('/markQuestionHelpful/:question_id', (req, res) => {
  helpers.markQuestionHelpful(req.params.question_id)
    .then((question) => {
      console.log('marked: ', question.data);
      res.send(question.data);
    })
})

app.post('/markAnswerHelpful', (req, res) => {
  helpers.markAnswerHelpful(req.body.answer_id)
    .then((answer) => {
      console.log('marked answer: ', answer.data);
      res.send(answer.data);
    })
})

app.post('/reportQuestion', (req, res) => {
  helpers.reportQuestion(req.body.question_id)
    .then((result) => {
      console.log('reported question: ', result.data)
      res.send(result.data)
    })
})

app.post('/reportAnswer', (req, res) => {
  helpers.reportAnswer(req.body.answer_id)
    .then((result) => {
      console.log('reported answer: ', result.data)
      res.send(result.data)
    })
})


// INTERACTION ROUTES
app.post('/logInteraction', (req, res) => {
  helpers.logInteraction(req.body.element, req.body.widget)
    .then((interaction) => {
      console.log('interaction: ', interaction.data);
      res.send(interaction.data);
    })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
