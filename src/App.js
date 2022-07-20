import logo from './assets/logonotext.png';
import './App.css';
import {useState} from 'react'

function App() {

  const [number, setNumber] = useState('0')

  const add = ()=> {
    setNumber(prevNum =>{
     return Number(prevNum + 1)
    })
  }

  const sub = ()=> {
    setNumber(prevNum =>{
     return Number(prevNum - 1)
    })
  }

  function addNumbers(numberOfTimes){
    for(let i = 0; i <= numberOfTimes ; i++){
      setNumber(()=>{
        return i
      })
    }
  }



  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={sub}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
