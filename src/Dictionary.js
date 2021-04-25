import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response){
    //store the results for only the first definition
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response){
    //store Pexels information to send to Photos component
    setPhotos(response.data.photos);
  }

  function search(){
    //documentation at https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //images from Pexels
    const pexelsApiKey = "563492ad6f91700001000001b6cf5986dac14647b9b97ea2381ffd4f";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
              <div className="row">
                <div className="col-2">
                  <strong>Dictionary:</strong>
                </div>
                <div className="col-8">
                  <input type="search" onChange={newKeyword} className="search-bar" defaultValue={props.defaultKeyword}/>
                </div>
                <div className="col-2">
                  <input type="submit" className="btn btn-primary" value="Search"></input>
                </div>
              </div>
            </form>
          </section>
        </header>
        <SearchResults results={results}/>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
