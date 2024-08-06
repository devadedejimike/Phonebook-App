import  { useState, useEffect } from 'react';
import serviceHandler from './services/handler';
import PersonForm from './assets/personForm';
import Filter from './assets/filter';
import Person from './assets/person';
import Notification from './assets/notification';


const App = () => {
    const [persons, setPersons] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('error');

    useEffect(() => {
       serviceHandler
        .getAll()
        .then(response => {
            setPersons(response.data || [])
        })
        .catch(error => {
            console.log("Error fetching data", error);
            setPersons([]);
        })
    }, [])

    const addToPhonebook = (newPerson) => {
        const checkIfNameAlreadyExist = persons.find(person => person.name === newPerson.name);

        if(checkIfNameAlreadyExist){
            window.confirm(`${newPerson.name} already exist in the phonebook do you want to change their number to ${newPerson.number}?`);
            
            serviceHandler
                .update(checkIfNameAlreadyExist.id, {...checkIfNameAlreadyExist, number: newPerson.number})
                .then(updatePerson => {
                    setPersons(persons.map(person => 
                        person.id != checkIfNameAlreadyExist.id ? person : updatePerson
                    
                ))
                setMessage(`Updated ${newPerson.name}'s number`)
                setMessageType('success')
                })
                .catch(error =>{
                  setMessage('Error upadating person', error);
                  setMessageType('error');
                })
        }else{
            serviceHandler
            .create(newPerson)
            .then(returnedPerson => {
                setPersons([...persons, returnedPerson]);
                setMessage(`Added ${newPerson.name}`)
                setMessageType('success')
            })
           .catch(error => {
              setMessage("Error adding name", error)
              setMessageType('error')
           })
        }
        

    }
    const handleFilterChange = (event) =>{
        setFilterValue(event.target.value);
    }
   
    const deletePerson = (id) => {
        console.log(`Attempting to delete person with id: ${id}`)
        serviceHandler
            .remove(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
                setMessage(`Deleted`)
                setMessageType('error')
            })
            .catch(error =>{
                console.log('Error deleting person', error)
                setMessageType('error')
            })
    }
    
    const filteredPerson = persons.filter(person => person.name && person.name.toLowerCase().includes(filterValue.toLowerCase()));
    
    return (
        <div className="container mx-auto p-4 w-fit">
            <h2 className="text-2xl text-center font-bold mb-4">PhoneBook App</h2>
            <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />
            <h3 className="text-xl text-center font-semibold mt-6 mb-2">Add Contact</h3>
            <Notification message={message} type={messageType}/>
            <PersonForm addToPhonebook={addToPhonebook}/>
            <h2 className="text-xl text-center font-semibold mt-6">Contacts</h2>
            <ul className="mt-4">
                {filteredPerson.map((person) =>
                <Person key={person.id} person={person} deletePerson={deletePerson}/>)}
            </ul>
        </div>
    )
}

export default App;
