import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({data,Edittodo,addtodo}) => {
    // console.log(data)
  return (
    <div>
      
      {React.Children.toArray(data.map(data=><TodoCard data={data} Edittodo={Edittodo} addtodo={addtodo} />))}
    </div>
  )
}

export default TodoList