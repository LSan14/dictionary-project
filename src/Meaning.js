import React from "react";
import "./Meaning.css";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech} </h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              {definitions.definitions}
              <em> {definitions.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
