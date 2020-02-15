const defaultsState = {
  searchedResults: [],
  selectedRecipe: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SEARCHED_RESULTS":
      return { ...state, searchedResults: action.searchedResults };
    case "SET_SELECTED_RECIPE":
      return { ...state, selectedRecipe: action.selectedRecipe };
    default:
      return state;
  }
}

export default reducer;