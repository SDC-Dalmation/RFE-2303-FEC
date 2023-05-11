import React, {useState, useEffect} from "react";
import axios from 'axios';

function QuestionSearch ({filterString, setFilterString}) {

  const [searchTerm, setSearchTerm] = useState("");

  if (searchTerm.length >= 3) {
    setFilterString(searchTerm);
  }

  return (
    <div>
      <label>
        <input
          value={filterString}
          onChange={e => {
            setFilterString(e.target.value);
            console.log(filterString);
          }}
          placeholder="Have a question? Search for answers…"
        />
      </label>
    </div>)
  }

export default QuestionSearch;