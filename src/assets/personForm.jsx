import {useState} from 'react';
import Button from "../button";
import { FaUser, FaPhone } from 'react-icons/fa6';


const PersonForm = ({ addToPhonebook }) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedName = newName.trim();
        const trimmedNumber = newNumber.trim();

        if(trimmedName === '' || trimmedNumber === ''){
            return;
        }
        
        addToPhonebook({name: trimmedName, number: trimmedNumber});
        setNewName('');
        setNewNumber('');
        
    }
    
    const handleNameChange = (event) =>{
        setNewName(event.target.value);
    }
    const handleNumberChange = (event) =>{
        setNewNumber(event.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='flex  gap-4'>
                    <div className='flex relative flex-col w-full max-w-xs'>
                        <FaUser className='absolute left-3 top-3  text-gray-500'/>
                        <input type='text' value={newName} onChange={handleNameChange} className='pl-10 py-2 px-4 border border-gray-300 rounded-md' placeholder='Name'/>
                    </div>
                    <div className='flex relative flex-col w-full max-w-xs'>
                        <FaPhone className='absolute left-3 top-3 text-gray-500'/>
                        <input type='text' value={newNumber} onChange={handleNumberChange} className='pl-10 py-2 px-4 border border-gray-300 rounded-md' placeholder='Number'/>
                
                    </div>
                </div>
                <Button text='submit' className="hover:bg-blue-700 font-bold"
                />
            </form>
        </div>
    )
}
export default PersonForm;