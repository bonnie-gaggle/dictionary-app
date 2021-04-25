import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary(props){
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response){
    //store the results for only the first definition
    setResults(response.data[0]);
  }

  function search(){
    //documentation at https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  //store updated keyword
  function newKeyword(event){
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded){
    return (
      <div className="Dictionary">
        <header className="sticky-top">
          <section>
            <form onSubmit={handleSubmit}>
              <strong>Dictionary: </strong>
              <input type="search" onChange={newKeyword} className="search-bar" defaultValue={props.defaultKeyword}/>
              <input type="submit" className="btn btn-primary" value="Search"></input>
            </form>
          </section>
        </header>
        <SearchResults results={results}/>
      </div>
    );
  } else {
    load();
  }
}
