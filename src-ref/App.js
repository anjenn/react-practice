import { useState, useEffect } from 'react';
import './App.css';

const Person = (props) => {
  // the <> </> wrapper allows us to return multiple html tags
  return (
    <> 
    <h1> Name: {props.name} </h1>
    </>
  )
}

// function App() {}
const App = () => {
  const [counter, setCounter ] = useState(0); // 0 is the initial value
  useEffect(() => {
    // whatever is written here takes place every time this component is rendered
    alert('Component rendered!');
    // RULE! never mutate/ modify the state manually. ex. counter = 100;
    // we may only use its own function, which is 'setCounter' which we have above.
    setCounter(100);

  }, []); // this empty array is a dependency array. Since we have empty array, it's only going to load when the component renders.
  // if we for example have [counter] as our dependency array, it's going to take effect every time our counter value updates.
  /*
  useEffect(() => {
    alert("You've updated counter");
  }, [counter]);
  */

  return (
    <div className="App">
      <Person name={'Jenn'}></Person>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
// we must export every single component so they can be called elsewhere