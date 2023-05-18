require("dotenv").config();
const axios = require('axios');

const url = process.env.URL;

//Products
module.exports.listProducts =  () => {
  return axios.get(`${url}/products?count=15`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}

module.exports.productInformation = (product_id) => {
  return axios.get(`${url}/products/${product_id}`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  })
}

module.exports.productStyles = (product_id) => {
  return axios.get(`${url}/products/${product_id}/styles`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  })
}

module.exports.relatedProducts = (product_id) => {
  return axios.get(`${url}/products/${product_id}/related`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  })
}

//Reviews
module.exports.listReviews = (product_id, sortType) => {
return axios.get(`${url}/reviews?product_id=${product_id}&sort=${sortType}&count=250`, {
  headers: {
    Authorization: process.env.API_KEY
    }
  })
}

module.exports.reviewMetadata = (product_id) => {
  return axios.get(`${url}/reviews/meta?product_id=${product_id}`, {
    headers: {
      Authorization: process.env.API_KEY
      }
    })
  }

  module.exports.reportReview = (review_id) => {
    return axios.put(`${url}/reviews/${review_id}/report`, {}, {
      headers: {
        Authorization: process.env.API_KEY
        }
      })
  }

  module.exports.markReviewHelpful = (review_id) => {
    return axios.put(`${url}/reviews/${review_id}/helpful`, {}, {
      headers: {
        Authorization: process.env.API_KEY
        }
      })
  }

  module.exports.addReview = (input) => {
    return axios.post(`${url}/reviews`, {
      product_id: input.product_id,
      rating: input.rating,
      summary: input.summary,
      body: input.body,
      recommend: input.recommend,
      name: input.name,
      email: input.email,
      photos: input.photos,
      characteristics: input.characteristics
    }, {
      headers: {
        Authorization: process.env.API_KEY
        }
      })
    }





//Questions and Answers API

module.exports.listQuestions = function (product_id) {
  return axios.get(`${url}/qa/questions?product_id=${product_id}&page=1&count=1000`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}

//answersList does not return reported answers
module.exports.listAnswers = function (question_id) {
  return axios.get(`${url}/qa/questions/${question_id}/answers`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}

module.exports.addQuestion = function (product_id, body, name, email) {
  return axios.post(`${url}/qa/questions`, {
    product_id: product_id,
    body: body,
    name: name,
    email: email
  }, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}

module.exports.addAnswer = function (question_id, body, name, email, photos) {
  return axios.post(`${url}/qa/questions/${question_id}/answers`, {
    body: body,
    name: name,
    email: email,
    photos: photos
  }, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}

module.exports.markQuestionHelpful = function (question_id) {
  return axios.put(`${url}/qa/questions/${question_id}/helpful`, {}, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}

module.exports.markAnswerHelpful = (answer_id) => {
  return axios.put(`${url}/qa/answers/${answer_id}/helpful`, {}, {
    headers: {
      Authorization: process.env.API_KEY
      }
    })
}

module.exports.reportQuestion = (question_id) => {
  return axios.put(`${url}/qa/questions/${question_id}/report`, {}, {
    headers: {
      Authorization: process.env.API_KEY
      }
    })
}

module.exports.reportAnswer = (answer_id) => {
  return axios.put(`${url}/qa/answers/${answer_id}/report`, {}, {
    headers: {
      Authorization: process.env.API_KEY
      }
    })
}



//Cart API
module.exports.getCartItems = function () {
  return axios.get(`${url}/cart`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}

module.exports.postCartItem = function (sku_id) {
  return axios.post(`${url}/cart`, {
    sku_id: sku_id
  }, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}




//Interactions API

module.exports.logInteraction = function (element, widget) {
  let date = new Date();
  return axios.post(`${url}/interactions`, {
    element: element,
    widget: widget,
    time: date
  }, {
    headers: {
      Authorization: process.env.API_KEY
    }
  });
}


























