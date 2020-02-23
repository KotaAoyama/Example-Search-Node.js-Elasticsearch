import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedRecipe } from '../redux/index';

export default function Recipe(props) {
  const dispatch = useDispatch();

  function selectRecipe(selectedRecipe) {
    dispatch(setSelectedRecipe(selectedRecipe));
  }

  return (
    <>
      <h2 onClick={() => selectRecipe(props.value._source)}>{props.value._source.title}</h2>
      <span>{props.value._source.description}</span>
    </>
  )
}