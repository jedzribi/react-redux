import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardListe from './CardListe'
import './Filter2.css'

const Filter2 = () => {
    const {todos}=useSelector(state=>state)
    const [showTaskFinished, setShowTaskFinished] = useState(true)
    const [showTaskNotFinish, setShowTaskNotFinish] = useState(true)
    const [showAllTask, setShowAllTask] = useState(true)
    // console.log(todos)
    let todostrue=todos.filter(e=>e.isDone===true)
    let todosfalse=todos.filter(e=>e.isDone===false)
    console.log(todostrue)
    console.log(todosfalse)
    
  return (
    <div >
        <div> {showAllTask && 
            <>{showTaskNotFinish &&
                <> 
                    {React.Children.toArray(todostrue.map(el=><CardListe task={el}/>))}
                </> }
            <>{showTaskFinished &&
                <>
                    {React.Children.toArray(todosfalse.map(el=><CardListe task={el}/>))}
                </> }
            </>
            </>}</div>
            <div className="taskfilter">
        <h2>filter todos by isDone</h2>
        <div style={{display:"flex",justifyContent:"center",margin:" 10px 10px 10px 10px"}}>
        <button className="filter" onClick={()=>setShowAllTask(!showAllTask)}>All task</button>
        <button className="filter" onClick={()=>setShowTaskFinished(!showTaskFinished)}>task finished</button>
        <button className="filter" onClick={()=>setShowTaskNotFinish(!showTaskNotFinish)}>task not finish</button>
            </div>
        </div>
        
    </div>
  )
}

export default Filter2