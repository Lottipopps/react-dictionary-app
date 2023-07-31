import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Pictures from "./Pictures";

export default function Dictionary(props) {
  let [key, setKey] = useState(props.defaultKey);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [pictures, setPictures] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handlePictures(response) {
    setPictures(response.data);
  }
  function apiCall() {
    const apiKey = "58e244e95c3e78eb13e0ffotadf7c1b8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${key}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    const picturesKey = "58e244e95c3e78eb13e0ffotadf7c1b8";
    let picturesUrl = `https://api.shecodes.io/images/v1/search?query=${key}&key=${picturesKey}`;
    axios.get(picturesUrl).then(handlePictures);
  }
  function search(event) {
    event.preventDefault();
    apiCall();
  }
  function handleKeyChange(event) {
    setKey(event.target.value);
  }
  function load() {
    setLoaded(true);
    apiCall();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={search} autoComplete="off">
          <input
            type="search"
            onChange={handleKeyChange}
            defaultValue={props.defaultKey}
            placeholder="Type a word"
          />
        </form>
        <div>
          <Results results={results} />
          <Pictures pictures={pictures} />
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
