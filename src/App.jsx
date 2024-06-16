import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

//function Output({output}) {
//
//  return (
//    <>
//      <input type='text' value={output} className='output' readOnly/>
//    </>
//  );
//}

function Buttons({onClickFunc}) {

  return (
    <>
      <div className="buttons-grid">
        <button className="button-zero" onClick={onClickFunc}>0</button>
        <button className="button-one" onClick={onClickFunc}>1</button>
        <button className="button-two" onClick={onClickFunc}>2</button>
        <button className="button-three" onClick={onClickFunc}>3</button>
        <button className="button-four" onClick={onClickFunc}>4</button>
        <button className="button-five" onClick={onClickFunc}>5</button>
        <button className="button-six" onClick={onClickFunc}>6</button>
        <button className="button-seven" onClick={onClickFunc}>7</button>
        <button className="button-eight" onClick={onClickFunc}>8</button>
        <button className="button-nine" onClick={onClickFunc}>9</button>
        <button className="button-plus" onClick={onClickFunc}>+</button>
        <button className="button-negative" onClick={onClickFunc}>-</button>
        <button className="button-reset" onClick={onClickFunc}>C</button>
      </div>
    </>
  );
}

function CalculatorInterface() {

  const [output, setOutput] = useState('0');

  //let a = '', b = '';

  const handleOutputChange = (value) => {
      setOutput(value.target.innerText);
  }

  return (
    <>
      <div className='calculator-background'>
        <div className='calculator'>
          <input type='text' value={output} className='output' readOnly/>
          <div className='buttons-interface'>
            <Buttons onClickFunc={handleOutputChange} />
          </div>
        </div>
      </div>
    </>
  );
}

function App() {

  return (
    <>
      <CalculatorInterface/>
    </>
  )
}

export default App
