import React from "react";
import "./Phonetics.css";

export default function Phonetic(props){

  function playAudio(){
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }

  return (
    <div className="Phonetic">
      <button onClick={playAudio}><i class="fas fa-volume-up"></i></button>
      {props.phonetic.text}
    </div>
  );
}