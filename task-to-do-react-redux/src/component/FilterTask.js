import React from 'react';
import { useDispatch } from 'react-redux';
import { handleFilter } from '../redux/action';
import "./FilterTask.css";

const FilterTask = () => {  
  const dispatch=useDispatch()
  let isDone=true
  let isDone1=""
  return(
    <div className='Filter'>
      <nav>
        <ul>
          <li class="deroulant"><button className='a' href="#">Filter By&ensp;</button>
        <ul class="sous">
        <li><button className='a' href="#" onClick={()=>dispatch(handleFilter(!isDone1))}>All task</button></li>
          <li><button className='a' href="#"onClick={()=>dispatch(handleFilter(isDone))}>task finished</button></li>
          <li><button className='a' href="#"onClick={()=>dispatch(handleFilter(!isDone))}>task not finished</button></li>
        </ul> 
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default FilterTask