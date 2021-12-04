import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState("Hola mundo")
     
    const handleInputChange = (e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        console.log("Submit hecho");
        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}
