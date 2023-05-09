import React, {useState, useEffect} from "react";

function Sort () {
  return(
    <div>
      <label>Sort By:</label>
      <select>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpfulness">Helpfulness</option>

      </select>
    </div>
  );
}

export default Sort;