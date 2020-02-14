import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form method="get" action="/api/search">
        <fieldset>
          <input name="recipe_search"></input>
          <button>Search</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
