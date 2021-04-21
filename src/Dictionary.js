import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, setKeyword] = useState("");
  function search(event){
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}...`)
  }

  //store updated keyword
  function newKeyword(event){
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={newKeyword}/>
        <input type="submit" className="btn btn-primary" value="Search"></input>
      </form>
    </div>
  );
}
