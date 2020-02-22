import React from 'react';
import { useDispatch } from 'react-redux';
import { removeSelectedRecipe } from '../redux/index';

export default function SingleRecipe() {

  const dispatch = useDispatch();

  function goBackSearch() {
    dispatch(removeSelectedRecipe());
  }

  return (
    <>
      <h4 onClick={() => goBackSearch()}>
        Recipe 
        <span id="S">S</span>
        <span id="e">e</span>
        <span id="a">a</span>
        <span id="r">r</span>
        <span id="c">c</span>
        <span id="h">h</span>
      </h4>




    </>
  )
}
