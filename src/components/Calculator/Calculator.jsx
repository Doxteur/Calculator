import React, { useState,useEffect } from "react";
import Button from "./Button.jsx";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [history, setHistory] = useState([]);

  const btnValues = [
    ["C", "CE", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];


  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      if (displayValue === "0" || !/\d/.test(displayValue)) {
        setDisplayValue(digit);
      } else {
        setDisplayValue((prevDisplayValue) => prevDisplayValue * 10 + parseInt(digit));
      }
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) return;
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const clearLastHistoryItem = () => {
    setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
  };

  const handleClear = (btnValue) => {
    if (btnValue === "C") {
      clearDisplay();
      setHistory([]); // Clear the entire history
    } else if (btnValue === "CE") {
      clearDisplay();
      clearLastHistoryItem(); // Remove the last history item
    }
  };
  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      let result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(result);
      setFirstOperand(result);
      const historyItem = `${firstOperand} ${operator} ${inputValue} = ${result}`;
      setHistory([...history, historyItem]);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);


  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const exportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + history.join("\n");
    const encodedURI = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedURI);
    link.setAttribute("download", "calculator_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div className="mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden w-64">
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
          <div className="w-full py-5 px-6 text-6xl text-white font-thin">
            {displayValue}
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
          {btnValues.map((row, index) => {
            return (
              <div className="flex w-full" key={index}>
                {row.map((btnValue) => {
                  return (
                    <div
                      className={`border-r border-b border-indigo-400 ${btnValue === "=" ? "w-2/4" : "w-1/4"
                        }`}
                      key={btnValue}
                    >
                      <Button
                        key={btnValue}
                        value={btnValue}
                        onClick

                        ={() => {
                          if (btnValue === "C") {
                            handleClear('C');
                          } else if (btnValue === "CE") {
                            handleClear('CE');
                          } else if (btnValue === "+-") {
                            setDisplayValue(displayValue * -1);
                          } else if (btnValue === "%") {
                            setDisplayValue(displayValue / 100);
                          } else if (btnValue === "=") {
                            performOperation();
                          } else if (btnValue === ".") {
                            inputDecimal();
                          } else if (btnValue === "/") {
                            performOperation("/");
                          } else if (btnValue === "X") {
                            performOperation("*");
                          } else if (btnValue === "-") {
                            performOperation("-");
                          } else if (btnValue === "+") {
                            performOperation("+");
                          } else {
                            inputDigit(btnValue);
                          }
                        }}
                      >
                        {btnValue}
                      </Button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div>
          <h2>History</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div onClick={exportToCSV} >
          <h2 className="bg-green-400 rounded-lg text-center font-bold cursor-pointer">Export CSV</h2>
            </div>
        </div>
      </div>


    </div>
  );
}

export default Calculator;