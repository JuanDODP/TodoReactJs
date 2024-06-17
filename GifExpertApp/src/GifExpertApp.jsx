import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [Categories, setCategories] = useState(["DBZ"]);
const addCategory=(value)=>{
 console.log({value})
 if (Categories.includes(value))return ;
  setCategories([ value,...Categories])
}
// console.log({newArr})
  return (
    <>
      <h1>GifExpertApp</h1>
      {/* <button 
      onClick={()=>{
        addCategory();
      }}
    >Agregar</button> */}
      {/* Inputs */}
    <AddCategory onAddCategory={value =>addCategory(value)} />
      {/* Listado de gif */}
        { Categories.map((o)=>
        ( <GifGrid key={o} Category={o}/>
        )

        ) }
      {/* gifItem */}
    </>
  );
};
