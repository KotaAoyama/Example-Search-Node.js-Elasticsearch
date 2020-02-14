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