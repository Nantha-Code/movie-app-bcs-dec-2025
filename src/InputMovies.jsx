import React from 'react'
import "./App.css"

function InputMovies() {
  return (
     <label className='label'>
    <input type="url" placeholder='url' className='url'/>
    <input type="text" placeholder='tittle' className='tittle'/>
    <input type="text"placeholder='rating'className='rating'/>
    <input type="text"placeholder='summary'className='summary'/>
    <button className='add'>Add</button>
     </label>
  )
}

export default InputMovies;