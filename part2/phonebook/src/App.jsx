import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personServices from './services/persons'
import Notification from './Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [isMessagePositive, setIsMessagePositive] = useState(false)

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  })

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleSubmit = (event) => {
    event.preventDefault()

    const isAlreadyAdded = persons.some(person => person.name === newName)

    if (isAlreadyAdded) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        const changedPerson = {...person, number: newPhone}
        personServices
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            setIsMessagePositive(true)
            setMessage(`The number of ${returnedPerson.name} was updated successfully`)
            setTimeout(() => {
              setMessage(null)
            }, 2500)
          })
          .catch(error => {
            setPersons(persons.filter(person => person.id !== person.id))
            setIsMessagePositive(false)
            setMessage(`${newName} was not found`)
            setTimeout(() => {
              setMessage(null)
            }, 2500)
          })
      }
      return
    }

    const newPerson = {
      name: newName,
      number: newPhone
    }

    personServices
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setIsMessagePositive(true)
        setMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 2500)
      })

      setNewName('')
      setNewPhone('')

    }

  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personServices
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isMessagePositive={isMessagePositive}/>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm newName={newName} newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
