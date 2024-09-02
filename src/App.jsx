import { useState } from "react";


function CalcInput({inputValue}) {

  const handleCLick = () => {

      alert(inputValue + 2);

  }

  return (

    <div onClick={handleCLick} className="calculator_value_input">

      {inputValue}

    </div>

  )

}

function App() {

  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);



  return (
    <>
    
      <div className="calculator_container">

        <div className="result_container">

        

        </div>

        <CalcInput inputValue={1}/>
        <CalcInput inputValue={2}/>
        <CalcInput inputValue={3}/>
        <CalcInput inputValue={4}/>
        <CalcInput inputValue={5}/>
        <CalcInput inputValue={6}/>
        <CalcInput inputValue={7}/>
        <CalcInput inputValue={8}/>
        <CalcInput inputValue={9}/>

      </div>

    </>
  )
}

export default App
