import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSelectedRecipe } from '../redux/index';

export default function SingleRecipe() {

  const selectedRecipe = useSelector(state => state.selectedRecipe);
  const dispatch = useDispatch();

  function goBackSearch() {
    dispatch(removeSelectedRecipe());
  }

  return (
    <>
      <h4 id="goBackSearch" onClick={() => goBackSearch()}>
        Recipe 
        <span id="S">S</span>
        <span id="e">e</span>
        <span id="a">a</span>
        <span id="r">r</span>
        <span id="c">c</span>
        <span id="h">h</span>
      </h4>

      <div id="showDocument">
        {JSON.stringify(selectedRecipe)}
      </div>
    </>
  )
}
