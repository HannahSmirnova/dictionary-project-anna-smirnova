import { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="search-engine">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Enter a word..."
          autoFocus={true}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <Results results={results} />
    </div>
  );
}
//https://api.dictionaryapi.dev/api/v2/entries/en/sunset
