import React from 'react';
import { useSelector } from 'react-redux';
import './style/App.css';
import Input from'./components/Input';
import RecipeList from './components/RecipeList';
import SingleRecipe from './components/SingleRecipe';

export default function App() {
  const selectedRecipe = useSelector(state => state.selectedRecipe);
  
  function searchOrSingleRecipe() {
    console.log('*********', selectedRecipe);
    if (selectedRecipe) {
      return (<SingleRecipe />);
    } else {
      return (
        <>
          <h1>
            Recipe
            <span id="S">S</span>
            <span id="e">e</span>
            <span id="a">a</span>
            <span id="r">r</span>
            <span id="c">c</span>
            <span id="h">h</span>
          </h1>
          <Input />
          <br/>
          <RecipeList />
        </>
      )
    }
  }

  return (
    <div className="App">
      {searchOrSingleRecipe()}
    </div>
  );
}