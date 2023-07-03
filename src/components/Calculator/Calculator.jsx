import React from "react";

function Calculator() {
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
          
        </div>
      </div>
    </div>
  );
}

export default Calculator;
