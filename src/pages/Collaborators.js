import React from 'react'
import { useSelector } from 'react-redux';

function Collaborators() {
  const collaborators = useSelector(state => state.collaborators)
  console.log({collaborators});
  return (
    <div>Collaborators</div>
  )
}

export default Collaborators