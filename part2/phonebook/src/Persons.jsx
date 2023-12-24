import React from 'react'

const Persons = ({ personsToShow}) => {
  return (
    <div>
      {personsToShow.map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default Persons
