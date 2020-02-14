import React from 'react';
import './App.css';
import Input from'./components/Input';
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <h3>Recipe Search</h3>
      <Input />
      <hr/>
      <Output />
    </div>
  );
}

export default App;
