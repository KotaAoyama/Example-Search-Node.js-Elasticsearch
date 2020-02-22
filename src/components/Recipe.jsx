import React from 'react'

export default function Recipe(props) {
  return (
    <>
      <h2>{props.value._source.title}</h2>
      <span>{props.value._source.description}</span>
    </>
  )
}