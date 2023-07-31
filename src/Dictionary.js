import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [key, setKey] = useState("");
  function search(event) {
    event.preventDefault();
    console.log({ key });
  }
  function handleKeyChange(event) {
    setKey(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyChange} />
      </form>
    </div>
  );
}
