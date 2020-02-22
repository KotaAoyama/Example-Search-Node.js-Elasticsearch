import React from 'react';
import '../style/SingleRecipe.css';
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
        <table>
          <thead>
            <tr>
              <td>Key</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>{selectedRecipe.title}</td>
            </tr>
            <tr>
              <td>description</td>
              <td>{selectedRecipe.description}</td>
            </tr>
            <tr>
              <td>ingredients</td>
              <td>{selectedRecipe.ingredients}</td>
            </tr>
            <tr>
              <td>directions</td>
              <td>{selectedRecipe.directions}</td>
            </tr>
            <tr>
              <td>prep_time_min</td>
              <td>{selectedRecipe.prep_time_min}</td>
            </tr>
            <tr>
              <td>cook_time_min</td>
              <td>{selectedRecipe.cook_time_min}</td>
            </tr>
            <tr>
              <td>servings</td>
              <td>{selectedRecipe.servings}</td>
            </tr>
            <tr>
              <td>tags</td>
              <td>{selectedRecipe.tags}</td>
            </tr>
            <tr>
              <td>author</td>
              <td>{selectedRecipe.author.name}</td>
            </tr>
            <tr>
              <td>source_url</td>
              <td>{selectedRecipe.source_url}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
