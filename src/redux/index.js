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

export function removeSelectedRecipe() {
  return {
    type: "REMOVE_SELECTED_RECIPE"
  }
}

// Reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCHED_RESULTS":
      return { ...state, searchedResults: action.results };
    case "SET_SELECTED_RECIPE":
      return { ...state, selectedRecipe: action.recipe };
    case "REMOVE_SELECTED_RECIPE":
      return { ...state, selectedRecipe: null };
    default:
      return state;
  }
}

const store =  createStore(reducer);

export default store;