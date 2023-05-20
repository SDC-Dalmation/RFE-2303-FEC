import react from 'react';
import axios from 'axios';

const PostAPIInteraction = (element, widget) => {
  let params =
    {
      element: element,
      widget: widget,
    };

  axios.post('/logInteraction', params)
  // .then(result => console.log("INTERACTION",result))
  // .catch(err => console.log(err));
}

export default PostAPIInteraction;