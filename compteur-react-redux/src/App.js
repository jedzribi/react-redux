import './App.css';
import { useSelector,useDispatch } from "react-redux";
import { handleMinus, handlePlus } from './Redux/action';

function App() {
  let k="*";
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  const plus = () => dispatch(handlePlus());
  const moins = () => dispatch(handleMinus());
  return (
    <div>
    <div className="App">
      <button className="moins" onClick={moins}>-</button>
      <p> { count }<notification style={{color:"red"}}>{k}</notification> </p>
      <button className="plus" onClick={plus}>+</button></div>
      <h6 style={{textAlign:"center",color:"red",marginTop:"-0.2%"}}> {k}10>compteur>0</h6>
    </div>
  );
}

export default App;
