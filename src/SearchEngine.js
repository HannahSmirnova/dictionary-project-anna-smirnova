import { useState } from "react";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
    </div>
  );
}
