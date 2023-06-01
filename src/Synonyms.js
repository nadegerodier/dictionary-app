import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms d-flex">
        {props.synonyms.map(function (synonym, index) {
          return (
            <a href="#" key={index}>
              {synonym}
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
