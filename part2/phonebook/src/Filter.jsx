import React from 'react'

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <label htmlFor="filter">Filter shown with </label>
      <input id="filter" value={filter} onChange={e => setFilter(e.target.value)}/>
    </div>
  )
}

export default Filter
