import React from "react";
import "./Phonetics.css";

export default function Phonetic(props){

  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <audio className="audio" controls src={props.phonetic.audio}> 
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}