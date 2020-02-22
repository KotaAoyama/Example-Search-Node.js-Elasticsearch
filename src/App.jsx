import React from 'react';
import './App.css';
import Input from'./components/Input';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <Input />
      <hr/>
      <RecipeList />
    </div>
  );
}

export default App;