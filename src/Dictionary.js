import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="mb-5">Dictionary</h1>
      <section>
        <div className="row justify-content-end">
          <div className="col-6">
            <h3>What word do you want to look up?</h3>
          </div>
          <div className="col-3"></div>
        </div>
        <form onSubmit={search}>
          <div className="row justify-content-end mt-2">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  autoFocus={true}
                  placeholder="Search for a word"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-light shadow-sm search-button"
                />
              </div>
            </div>
          </div>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
