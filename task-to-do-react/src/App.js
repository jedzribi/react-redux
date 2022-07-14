import './App.css';
import { useState } from 'react';
import LISTTODO from "./ListTodo";
import AddTodo from './composents/AddTodo';
import ListeTodo from './composents/ListeTodo';
import Filter from './composents/Filter';

function App() {
  const [todoListe,setTodoListe]=useState();
  const [byIsDone,setByIsDone]=useState()
  //to add todo
  const handleAdd =(newTodo)=>{
    setTodoListe([...todoListe,newTodo]);}
  //to filter by isDone True
  const handleFiltreByIsDoneTrue =(todofilter)=>{
      setByIsDone(LISTTODO.filter(el=>el.isDone!=="true"))
    }
    //to filter by isDone False
  const handleFiltreByIsDoneFalse =(todofilter)=>{
    setByIsDone(byIsDone.filter(el=>el.isDone!=="False"))
  }
  //to edit movie
  const handleedit=(todoupd)=>{
    setTodoListe(todoListe.map(el=>el.id=todoupd.id?{...el,todoupd}:el))
  }
  return (
    <div className="App">
      <div className="text">
      <div id="text">
         TODO App create with react
</div></div>
      <div>
      <AddTodo  addtodo={handleAdd} />
      </div>
      <div>
      <ListeTodo data={LISTTODO} edittodo={handleedit} addtodo={handleAdd} />
      </div>
      <div>
      <Filter data={LISTTODO} filterTrue={handleFiltreByIsDoneTrue} filtreFalse={handleFiltreByIsDoneFalse}/>
      </div>
    </div>
  );
}

export default App;
