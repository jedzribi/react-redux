import React from "react";
import EditTodo from "./EditTodo";
import "./TodoCard.css";

const TodoCard = ({data,Edittodo}) => {
    // console.log(item)
  return (
    <div className="TodoCard">
        <div className="todo">
        <h3 className="title">⚫{data.description}</h3>
        </div>
        <div style={{margin:"0 0 0 0"}}>
        <EditTodo data={data} Edittodo={Edittodo} />
        </div>
         
       
    </div>
  );
};

export default TodoCard;
