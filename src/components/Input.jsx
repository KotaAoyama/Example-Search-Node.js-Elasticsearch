import React from 'react';
import '../style/Input.css';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { setSearchedResults } from "../redux/index";

export default function Input() {
  const dispatch = useDispatch();
  
  const getSearchResult = async (event) => {
    if (event.keyCode === 13) {
      const param = document.getElementById("search").value;
      const response = await axios.get(`/api/search?recipe_search=${param}`);
      dispatch(setSearchedResults(response.data));
    }
  }

  return (
    <input 
      id="search" 
      name="recipe_search" 
      size="60" 
      placeholder="  Search..." 
      onKeyUp={(event) => getSearchResult(event)}>
    </input>
  );
}