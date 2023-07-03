import React from "react";
import Button from "./Button";

function Calculator() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".","="],
  ];

  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div
          className="mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden w-64"
        >
          <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin">
              340.0
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
                      ${btnCut == "=" ? 'w-2/4' :'w-1/4'}`}
                       key={btnCut}>
                        <Button value={btnCut}  />
                      
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
