import { FaSistrix } from 'react-icons/fa6';

const Filter = ({filterValue, handleFilterChange}) => {
    return(
        <div className="relative mb-4">
            
            <label className="block text-gray-700">Filter contacts by name:</label>
            <FaSistrix className='absolute top-12 left-3 transform -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none '/>
            <input type='text' value={filterValue} onChange={handleFilterChange} className="mt-1 pl-10 py-2 block w-full border border-gray-300 rounded-md"/>
        </div>
    )
}

export default Filter;