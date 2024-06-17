import React from 'react'

export const GifItem = ({url, title, id}) => {
  return (
    <div className="card"> 
    <img src={url} alt={title} onClick={()=>{console.log('HOLA diste click')}} />
    <p>{title}</p>
    </div>
  )
}