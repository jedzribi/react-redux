import './App.css';
import AddNewTask from './component/AddNewTask';
import Filter2 from './component/Filter2';
import FilterTask from './component/FilterTask';
// import ListeTask from './component/ListeTask';

function App() {
  return (
    <div className="App">
      <div style={{display:"flex", justifyContent:"center"}}>
      <AddNewTask/>
      <FilterTask/>
      {/* <ListeTask/> */}
      </div>
      <Filter2/>
    </div>
  );
}

export default App;