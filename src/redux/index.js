import { createStore } from "redux";

// State
const initialState = {
  searchedResults: [],
  selectedRecipe: null
}

// Actions
export function setSearchedResults(results) {
  return {
    type: "SET_SEARCHED_RESULTS",
    results
  }
}

export function setSelectedRecipe(recipe) {
  return {
    type: "SET_SELECTED_RECIPE",
    recipe
  }
}

// Reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCHED_RESULTS":
      console.log({ ...state, searchedResults: action.results });
      return { ...state, searchedResults: action.results };
    case "SET_SELECTED_RECIPE":
      return { ...state, selectedRecipe: action.selectedRecipe };
    default:
      return state;
  }
}

const store =  createStore(reducer);

export default store;