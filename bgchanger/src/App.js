import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {


  let [color, setColor] = useState("red")

  return <>
    <div style={{ width: "100%", backgroundColor: color, height: "550px" }}>
    </div>
    <div>
      <div className='bg-white d-flex justify-content-center p-2 '>
        <button onClick={() => setColor("red")} className='m-2 rounded text-white' style={{ backgroundColor: "red" }}>Red</button>
        <button onClick={() => setColor("blue")} className=' m-2 rounded text-white' style={{ backgroundColor: "blue" }}>Blue</button>
        <button onClick={() => setColor("black")} className='m-2 rounded  text-white' style={{ backgroundColor: "black" }}>Black</button>
        <button onClick={() => setColor("orange")} className=' m-2 rounded  text-white' style={{ backgroundColor: "orange" }}>orange</button>
        <button onClick={() => setColor("green")} className='m-2 rounded  text-white' style={{ backgroundColor: "green" }}>green</button>
        
      </div>
    </div>
  </>
}

export default App;
