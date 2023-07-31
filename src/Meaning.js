import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <h6>Definition</h6>
        {props.meaning.definition}
        <br />
        <br />
        <em>{props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
