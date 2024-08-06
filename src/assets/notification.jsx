import { useEffect, useState } from "react";

const Notification = ({message, type}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      if(message)
        setShow(true);
        const timer = setTimeout(() => {
            setShow(false)
        },3000)

    
      return () => {
        clearTimeout(timer)
      }
    }, [message])
    const backgroundColor = type === 'error' ? 'bg-red-400' : 'bg-green-100';
    const textColor = type === 'error' ? 'text-white' :'text-green-700'


    return (
        show && <div className={`fixed top-4 right-4 p-4 ${backgroundColor} ${textColor} rounded shadow-lg transistion-opacity duration-300 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}>
            <span className="block sm:inline"> {message} </span>
        </div>
    );
};

export default Notification;