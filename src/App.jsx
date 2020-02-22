import React from 'react';
import './style/App.css';
import Input from'./components/Input';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;