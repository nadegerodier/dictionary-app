import React, { useState, useRef } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  const ref = useRef(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsImages(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "oWCkKEhSBON5NDQk8PJOGFxb2h8IyuwwoHbcMk8h2QzBd07IbFJeesFw";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    const headers = { Authorization: pexelsApiKey };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsImages);
  }

  function handleSubmit(event) {
    event.preventDefault();
    ref.current.value = "";
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="mb-5">Dictionary</h1>
      <section>
        <div className="row justify-content-center justify-content-md-end">
          <div className="col-10 col-lg-6">
            <h4>What word do you want to look up?</h4>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center justify-content-md-end mt-2">
            <div className="col-7 col-lg-6">
              <div className="form-group">
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  autoFocus={true}
                  placeholder="Search for a word"
                  className="form-control"
                  ref={ref}
                />
              </div>
            </div>
            <div className="col-3 col-lg-3">
              <div className="form-group">
                <input
                  type="submit"
                  value="Search"
                  className="form-control search-button"
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
