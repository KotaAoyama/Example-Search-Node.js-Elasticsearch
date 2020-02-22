import React from 'react';
import { useSelector } from 'react-redux';
import Recipe from './Recipe';

export default function RecipeList() {
  const searchedResults = useSelector(state => state.searchedResults);
  
  const recipes = searchedResults.map((doc) => {
    return (<Recipe value={doc} key={doc._id}/>)
  })
  
  return (
    <>
      <ul>
        {recipes}
      </ul>
    </>
  );
}