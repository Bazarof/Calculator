import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function add(x, y) {
  return (parseInt(x) + parseInt(y)).toString();
}

function substract(x, y) {
  return (parseInt(x) - parseInt(y)).toString();
}

function multiply(x, y) {
  return (parseInt(x) * parseInt(y)).toString();
}

function divide(x, y) {
  return (parseInt(x) / parseInt(y)).toString();
}

function Buttons({onClickNumber, onClickOperation, onClickExecOp, onClickReset}) {

  return (
    <>
      <div className="buttons-grid">
        <button className="button-zero" onClick={onClickNumber}>0</button>
        <button className="button-one" onClick={onClickNumber}>1</button>
        <button className="button-two" onClick={onClickNumber}>2</button>
        <button className="button-three" onClick={onClickNumber}>3</button>
        <button className="button-four" onClick={onClickNumber}>4</button>
        <button className="button-five" onClick={onClickNumber}>5</button>
        <button className="button-six" onClick={onClickNumber}>6</button>
        <button className="button-seven" onClick={onClickNumber}>7</button>
        <button className="button-eight" onClick={onClickNumber}>8</button>
        <button className="button-nine" onClick={onClickNumber}>9</button>
        <button className="button-addition" onClick={onClickOperation}>+</button>
        <button className="button-substraction" onClick={onClickOperation}>-</button>
        <button className='button-multiplication' onClick={onClickOperation}>*</button>
        <button className='button-division' onClick={onClickOperation}>/</button>
        <button className='button-equal' onClick={onClickExecOp}>=</button>
        <button className="button-reset" onClick={onClickReset}>C</button>
      </div>
    </>
  );
}

function CalculatorInterface() {

  const [output, setOutput] = useState('0');
  const [operatorPressed, setOperatorPressed] = useState(true);
  const [x, setX] = useState('');
  const [operation, setOperation] = useState('');

  const onClickNumber = (value) => {

    if(operatorPressed){
      setOutput(value.target.innerText);
      setOperatorPressed(false);
    }else{
      setOutput((o) =>  o + value.target.innerText);
    }

  }

  //when operation button is pressed
  const setOperator = (value) => {
    setX(output);
    setOperation(value.target.innerText);
    setOperatorPressed(true);
  }

  //when equal is pressed
  const execOperation = () => {
    switch(operation) {
      case '+':
        setOutput(add(x,output));
        break;
      case '-':
        setOutput(substract(x, output));
        break;
      case '*':
        setOutput(multiply(x, output));
        break;
      case '/':
        setOutput(x !== '0' ? divide(x, output) : 'Error');
        break;
    }

    //reset state
    setOperatorPressed(true);
    setX('');
    setOperation('');
  }

  const resetOperation = () => {
    setOutput('0');
    setOperatorPressed(true);
    setX('');
    setOperation('');
  }

  return (
    <>
      <div className='calculator-background'>
        <div className='calculator'>
          <input type='text' value={output} className='output' readOnly/>
          <div className='buttons-interface'>
            <Buttons
              onClickNumber={onClickNumber}
              onClickOperation={setOperator}
              onClickExecOp={execOperation}
              onClickReset={resetOperation}/>
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
