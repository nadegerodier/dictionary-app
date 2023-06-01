import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsImages(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "oWCkKEhSBON5NDQk8PJOGFxb2h8IyuwwoHbcMk8h2QzBd07IbFJeesFw";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: pexelsApiKey };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsImages);
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
      <Photos photos={photos} />
    </div>
  );
}
