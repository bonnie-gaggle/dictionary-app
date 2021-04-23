import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function SearchResults(props){
  if (props.results){
    return (
      <div className="SearchResults">
        <h2> {(props.results.word).toLowerCase()}
        </h2>
        {props.results.phonetics.map(function(phonetic, index){
          return(
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        <div className="definitions">
          {props.results.meanings.map(function (meaning, index){
            return <div key={index}>
              <Meaning meaning={meaning} />
            </div>;
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}