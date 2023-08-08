import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number:'9876543210',id:1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }

  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }

  const handleFilterValueChange=(event)=>{
    setFilterValue(event.target.value)
  }

  const addPerson=(event)=>{
    event.preventDefault()
    const personObject={
      name:newName,
      number:newNumber,
      id:persons.length+1
    }
    if(persons.filter(person=>person.name===personObject.name).length>0){
      alert(newName+" is already added to phonebook")
      return
    }
      
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filterValue} handleFilter={handleFilterValueChange}></Filter>
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}></PersonForm>
      <h3>Numbers</h3>
      <Persons persons={persons} filterValue={filterValue}></Persons>
    </div>
  )
}

export default App