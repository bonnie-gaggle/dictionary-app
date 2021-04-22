import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response){
    //store the results for only the first definition
    setResults(response.data[0]);
  }

  function search(event){
    event.preventDefault();
    //documentation at https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
      <SearchResults results={results}/>
    </div>
  );
}
