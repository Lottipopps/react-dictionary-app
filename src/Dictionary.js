import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [key, setKey] = useState(props.defaultKey);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function apiCall() {
    const apiKey = "58e244e95c3e78eb13e0ffotadf7c1b8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${key}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeyChange}
            placeholder={props.defaultKey}
          />
        </form>
        <div>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
