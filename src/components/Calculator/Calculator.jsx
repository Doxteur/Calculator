import React, { useState,useEffect } from "react";
import Button from "./Button";
import {toLocaleString,numClickHandler, signClickHandler, commaClickHandler, equalsClickHandler, percentClickHandler, invertClickHandler, resetClickHandler} from './functions'

function Calculator() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  useEffect(() => {
    console.log(calc);
  }, [calc]);

  const removeSpaces = (num) => num.toString().replace(/\s/g, "");

  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div
          className="mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden w-64"
        >
          <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin">
              {toLocaleString(calc.res ? calc.res : calc.num)}  
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">

            {/* Map on btnValues and its value */}
            {btnValues.map((btn, i) => {
              return (
                <div className="flex w-full" key={i}>
                  {btn.map((btnCut) => {
                    return (
                      <div className={` border-r border-b border-indigo-400 
                      ${btnCut == "=" ? 'w-2/4' : 'w-1/4'}`}
                        key={btnCut}>
                        <Button 
                          value={btnCut}
                          onClick={(e) => {
                            console.log(e.target.innerHTML);
                            btnCut === "C"
                              ? resetClickHandler(calc,setCalc)
                              : btnCut === "+-"
                              ? invertClickHandler(calc,setCalc)
                              : btnCut === "%"
                              ? percentClickHandler(calc,setCalc)
                              : btnCut === "="
                              ? equalsClickHandler(calc,setCalc)
                              : btnCut == "/" || btnCut == "X" || btnCut == "-" || btnCut == "+"
                              ? signClickHandler(e,calc,setCalc)
                              : btnCut === "."
                              ? commaClickHandler(e,calc,setCalc)
                              : numClickHandler(e,calc,setCalc)
                          }
                        }
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
