import React from 'react'

const PersonForm = ({ newName, newPhone, setNewName, setNewPhone, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={e => setNewName(e.target.value)} value={newName} />
      </div>
      <div>
        phone: <input onChange={e => setNewPhone(e.target.value)} value={newPhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
