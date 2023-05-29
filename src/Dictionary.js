import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <h1 className="mb-5">Dictionary</h1>
      <form onSubmit={search}>
        <div className="row justify-content-end">
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
    </div>
  );
}
