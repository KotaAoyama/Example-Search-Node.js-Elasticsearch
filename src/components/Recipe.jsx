import React from 'react';
import '../style/Recipe.css';
import { useDispatch } from 'react-redux';
import { setSelectedRecipe } from '../redux/index';

export default function Recipe(props) {
  const dispatch = useDispatch();

  function selectRecipe(selectedRecipe) {
    dispatch(setSelectedRecipe(selectedRecipe));
  }

  return (
    <>
      <h2>
        <span 
          className="searchedRecipeResult" 
          onClick={() => selectRecipe(props.value._source)}>
          {props.value._source.title}
        </span>
      </h2>
      <span>{props.value._source.description}</span>
    </>
  )
}