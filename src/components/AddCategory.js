import React, { useState }from 'react'

const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState('');

const handleChange = (e) => {
    setInputValue(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }

    // Usando este modelo para ter acesso ao valor da categorias (array)
  
};

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
        ></input>
    </form>
  )
}

export default AddCategory