import React from 'react';
import { useSelector } from 'react-redux';
import CardListe from './CardListe'

const ListeTask = () => {
  const {todos}=useSelector(state=>state)
  return (
    <div>
      {React.Children.toArray(todos.map(el=><CardListe task={el}/>))}
    </div>
  )
}

export default ListeTask