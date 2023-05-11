import React, {useState, useEffect} from "react";
import axios from 'axios';

function QuestionSearch ({filterString, setFilterString}) {

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.length > 2) {
      setFilterString(searchTerm);
    } else {
      setFilterString('');
    }
  }, [searchTerm])

  return (
    <div>
      <label>
        <input
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Have a question? Search for answers…"
        />
      </label>
    </div>)
  }

export default QuestionSearch;