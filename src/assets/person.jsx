import Button from "../button";

const Person = ({ person, deletePerson }) => {

    const handleDelete = () => {
        if(window.confirm(`Delete ${person.name}?`)) {
            console.log(`Deleting ${person.name}`);
            deletePerson(person.id);
        }
    }
    return(
        <li className="flex justify-between items-center py-2">{person.name} - {person.number} <Button text='Delete' onClick={handleDelete} className="bg-red-500 text-white py-1 px-3 rounded-md"/></li>
    )
}

export default Person;