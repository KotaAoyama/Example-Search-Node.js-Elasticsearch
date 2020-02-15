import React from 'react';
import { useSelector } from 'react-redux';

export default function Output() {
  const searchedResults = useSelector(state => state.searchedResults);
  const listResults = searchedResults.map((doc) => {
    return (
      <li key={doc._id}>
        {doc._source.title}
      </li> 
    )
  })
  return (
    <>
      <div id="output">
        <ul>{listResults}</ul>
      </div>
    </>
  );
}