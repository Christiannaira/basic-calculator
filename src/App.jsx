import { useState } from "react";


function CalcInput({inputValue, setNumber, numbers, setNumbers}) {

  const handleCLick = () => {

      // setNumber(inputValue);
      setNumbers(numbers + inputValue);

  }

  return (

    <div onClick={handleCLick} className="calculator_value_input">

      {inputValue}

    </div>

  )

}

function App() {

  const [number, setNumber] = useState(0)
  const [numbers, setNumbers] = useState("");
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);



  return (
    <>
    
      <div className="calculator_container">

        <div className="result_container">

        {numbers}

        </div>

        <div className="value_inputs_container">

          <CalcInput inputValue={1} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>
          <CalcInput inputValue={2} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>
          <CalcInput inputValue={3} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>
          <CalcInput inputValue={4} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>
          <CalcInput inputValue={5} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>
          <CalcInput inputValue={6} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>
          <CalcInput inputValue={7} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>
          <CalcInput inputValue={8} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>
          <CalcInput inputValue={9} setNumber={setNumber} numbers={numbers} setNumbers={setNumbers}/>


        </div>

      </div>

    </>
  )
}

export default App
