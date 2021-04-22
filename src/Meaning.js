import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
  return(
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function(definition,index){
        return(
          <div key={index}>
            <div>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
      
    </div>
  )
}