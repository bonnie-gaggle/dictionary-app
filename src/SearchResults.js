import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./SearchResults.css";

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
              return <section key={index}>
                <Meaning meaning={meaning} />
              </section>;
            })}
          </div>
        
      </div>
    );
  } else {
    return null;
  }
}