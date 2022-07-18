import React from 'react';
import { useDispatch } from 'react-redux';
import { handleComplete, handleDelete } from '../redux/action';
import "./CardListe.css";
import './DeleteTask.css'
import './CompleteTask.css'
import EditTask from './EditTask';

const CardListe = ({task}) => {
  console.log(task)
  const dispatch= useDispatch()
  return (
    <div className='cardliste' >
      <div style={{display:"block"}}>
      <div className={task.isDone?"task1":"task2"}><h3>➤ {task.description}</h3></div>
      </div>
      <div>
      <button className={task.isDone?"btncomplete":"btnundo"} onClick={()=>dispatch(handleComplete(task.id))}>
        {task.isDone?"complete":"undo"}</button>
        <div style={{display:"flex"}}>
        <EditTask tache={task}/>
        <div><button className='btnDelete' onClick={()=>dispatch(handleDelete(task.id))}>🗑️</button></div>
        </div>
      </div>
      </div>
  )
}

export default CardListe