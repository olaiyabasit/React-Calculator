import "./App.css";
import { useState } from "react";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState();

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const operators = ["/", "*", "-", "+"];
  const otherOperand = ["0", "."];
  
  const displayOtherOperand = () =>
    otherOperand.map((operand, key) => (
      <button key={key} onClick={() => updateCalc(operand.toLowerCase())}>
        {operand}
      </button>
    ));

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const calculate = () => setCalc(eval(calc).toString());

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const displayOperands = () =>
    operators.map((operand, index) => (
      <button key={index} onClick={() => updateCalc(operand.toLowerCase())}>
        {operand}
      </button>
    ));

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : ""} &nbsp;
          {calc || 0}
        </div>
        <div className="operators">
          {displayOperands()}
          <button onClick={deleteLast}>Del</button>
        </div>
        <div className="digits">
          {createDigits()}
          {displayOtherOperand()}
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
