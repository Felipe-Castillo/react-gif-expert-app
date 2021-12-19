import React, { useState } from 'react'
import PropTypes from 'prop-types';


//{} desestructurar arreglo
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");
    
    const handleInputChange=(e)=>{

        setInputValue(e.target.value);

    }

    const handleSubmit=(e)=>{

        e.preventDefault();

        if(inputValue.trim().length>2)
        {
            setCategories((c)=>{
                return [inputValue,...c];
           });
    
        }

    
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleInputChange}
            />
        </form>
    )
}



AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
AddCategory.defaultProps={
    setCategories:''
}