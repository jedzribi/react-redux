import "./EditTodo.css";


const EditTodo = (data,Edittodo) => {

  return (
    <div style={{display:"flex"}} className="EditTodo">
      
        <button >Edit</button>
        
        <div style={{display:"flex",}} >
            <p>task finished:</p>
            <button className='yes'>Yes</button>
            <button className='no'>No</button>
        </div>
    </div>
  )
}

export default EditTodo