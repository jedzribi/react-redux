import React from 'react';
import "./Filter.css"

const Filter = () => {
  return (
    <div className='filter'>
        <p className='textFilter'>filter tasks</p>
        <button className='finish' value={"true"}>task finished</button>
        <button className='progress' value={"false"}>task in progress</button>
    </div>
  )
}

export default Filter