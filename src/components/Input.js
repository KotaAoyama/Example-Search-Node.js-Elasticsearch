import React from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { setSearchedResults } from "../redux/index";
import Button from '@material-ui/core/Button';

export default function Input() {
  const dispatch = useDispatch();
  
  const getSearchResult = async () => {
    const param = document.getElementById("search").value;
    const response = await axios.get(`/api/search?recipe_search=${param}`);
    dispatch(setSearchedResults(response.data));
  }

  return (
    <>
      <fieldset>
        <input id="search" name="recipe_search" size="40" placeholder="Search..."></input>
        <button onClick={() => getSearchResult()}>Search</button>
      </fieldset>
    </>
  );
}