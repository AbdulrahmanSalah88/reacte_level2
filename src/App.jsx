import "./App.css";
import { useState } from "react";


function App() {
  const [person, setPerson] = useState("Ali Hassan");
  const [Age, setAge] = useState(28);
  const [Count, setCount] = useState(0);

  // The Elements of => (ChangeAge)
  const ChangeAge = () => {
    setAge(10)
  }

  // The Elements of => (ChangeAge)
  const Counter = () => {
    setCount(Count + 1)
  }


  return (
    <div className="App">
      <h2>My Name is {person}</h2>
      <button onClick={() => { setPerson("BodaSalah") }}>Change Name</button>
      <br />
      <br />
      <h3>My age {Age}</h3>
      <button onClick={ChangeAge}>Change age</button>
      <br />
      <br />
      <br />
      <button onClick={Counter}>Count is {Count}</button>
    </div>

  );
}

export default App;
