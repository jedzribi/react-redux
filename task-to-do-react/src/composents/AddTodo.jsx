import React, { useState } from 'react';
import "./AddTodo.css"

const AddTodo = ({addtodo} ) => {
  const [description, setDescription] = useState();
  const handleSubmit=(e)=>{e.preventDefault()
  const newTodo={id:Date.now(),description,isDone:"false"}
  addtodo(newTodo)    
  }
  return (
    <div className='ADDTODO'>
    <div className='addtodo'>
      <form onSubmit={handleSubmit}>
      <input type="text" value={description} placeholder="Add new task"
      onChange={e=>setDescription(e.target.value)} onSubmit={handleSubmit}/>
      <button className='add' >Add</button></form>
      </div>
    </div>
  )
}

export default AddTodo