import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [key, setKey] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    const apiKey = "58e244e95c3e78eb13e0ffotadf7c1b8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${key}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyChange(event) {
    setKey(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyChange} />
      </form>
      <div>
        <Results results={results} />
      </div>
    </div>
  );
}
