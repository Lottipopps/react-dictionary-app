import React from "react";
import "./Synonym.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <blockquote>
          <h6>Synonyms</h6>
          <ul>
            {props.synonyms.map(function (synonym, index) {
              return (
                <li key={index}>
                  <em>{synonym}</em>
                </li>
              );
            })}
          </ul>
        </blockquote>
      </div>
    );
  } else {
    return null;
  }
}
