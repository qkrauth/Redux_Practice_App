import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {useRef} from "react"

function App() {
  const nameRef = useRef();
  const itemRef = useRef();
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const name = useSelector(state => state.name);
  const list = useSelector(state => state.list);

  const increase = () => dispatch({type: "INCREASE"})
  const decrease = () => dispatch({type: "DECREASE"})

  const changeName = () => {
    dispatch({type: "CHANGENAME", payload: nameRef.current.value})
    nameRef.current.value = ""
    nameRef.current.focus()
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADDITEM",
      payload: itemRef.current.value
    })
    itemRef.current.value = ""
    itemRef.current.focus()
  }

  return (
    <div className="App col-container">
      <h1>Redux Reference</h1>
      <div className="card">
        <h2>Count: {count}</h2>
        <div className="row-container">
          <button onClick={increase}>Up</button>
          <button onClick={decrease}>Down</button>
        </div>
      </div>
      <div className="card">
        <h2>Name: {name}</h2>
        <input type="text" ref={nameRef}/>
        <button onClick={changeName}>Change</button>
      </div>
      <div className="card">
        <h2>List</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={itemRef}/>
          <button>Add</button>
        </form>
        {list.map((item) => <h4>{item}</h4>)}
      </div>
    </div>
  );
}

export default App;
