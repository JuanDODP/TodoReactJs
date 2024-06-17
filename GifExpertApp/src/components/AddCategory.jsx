import React, { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setinputValue] = useState('');
  const onInputchange = (event) => {
    // console.log({ event });
    setinputValue(event.target.value);
    // console.log(inputValue)
  };
  const onSubmit=(event)=>{
  event.preventDefault();
  if(inputValue.trim().length<=1 ) return;
  console.log('Input de enter',{inputValue})
  // onAddCategory(inputValue)
  onAddCategory(inputValue.trim());
  setinputValue('')
  }
  return (
    <>
    <form onSubmit={onSubmit}>

      <input
        type="text"
        placeholder="Buscador de gif"
        value={inputValue}
        onChange={(event) => onInputchange(event)}
        />
        </form>
    </>
  );
};
