import React from 'react'

const Persons = ({ personsToShow, handleDelete }) => {
  return (
    <div>
      {personsToShow.map(person => 
        <div key={person.name}>
          <span>{person.name} {person.number}</span> 
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons
