
const Button = ({text, onClick, className}) => {

    return(
        <button onClick={onClick} className={`bg-blue-500 text-white py-2 px-4 rounded-md ${className}`}>{text}</button>
    )
}

export default Button;