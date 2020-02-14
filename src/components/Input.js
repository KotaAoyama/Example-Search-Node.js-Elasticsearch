import React from 'react';
import axios from 'axios';

export default function Input() {
    
  const getSearchResult = async () => {
    const param = document.getElementById("search").value;
    await axios.get(`/api/search?recipe_search=${param}`).then((res) => {
      console.log(res);
    })
  }

  return (
    <>
        <fieldset>
          <input id="search" name="recipe_search" size="40"></input>
          <button onClick={() => getSearchResult()}>Search</button>
        </fieldset>
    </>
  );
}