import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCat}) => {

    const [inputValue, setinputValue] = useState("")
     
    const handleInputChange = (e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCat( cats => [...cats, inputValue]);
            setinputValue('');
        }
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

AddCategory.propTypes = {
    setCat: PropTypes.func.isRequired,
}


