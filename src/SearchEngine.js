import { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    const apiKey = "60503d6efotf2704dfb74d90d8ce4ea6";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then(function (response) {
        setWord(response.data);
      })
      .catch(function (error) {
        console.error("API error:", error);
        setWord(null);
      });
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
        />
        <input type="submit" value="Search" />
      </form>
      <Results word={word} />
    </div>
  );
}
