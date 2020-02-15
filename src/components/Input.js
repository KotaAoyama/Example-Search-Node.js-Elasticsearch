import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { setSearchedResults } from "../redux/index";

export default function Input() {
  // const searchedResults = useSelector(state => state.searchedResults);
  const dispatch = useDispatch();
  
  const getSearchResult = async () => {
    const param = document.getElementById("search").value;
    await axios.get(`/api/search?recipe_search=${param}`).then((res) => {
      dispatch(setSearchedResults(res.data));
      console.log('res.data: ', res.data);
    });
  }

  // const check = () => {
  //   console.log(searchedResults);
  // }

  return (
    <>
      <fieldset>
        <input id="search" name="recipe_search" size="40" placeholder="Search..."></input>
        <button onClick={() => getSearchResult()}>Search</button>
        {/* <button onClick={() => check()}>Check</button> */}
      </fieldset>
    </>
  );
}