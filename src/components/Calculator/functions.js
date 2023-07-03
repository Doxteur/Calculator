export const numClickHandler = (e,calc,setCalc) => {
  e.preventDefault();
  const value = e.target.innerHTML;
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    });
};

export const commaClickHandler = (e,calc,setCalc) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  setCalc({
    ...calc,
    num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  });
};

export const signClickHandler = (e,calc,setCalc) => {
    console.log("Equals")
  e.preventDefault();
  const value = e.target.innerHTML;
console.log("Sign")
  setCalc({
    ...calc,
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0,
  });
};

export const equalsClickHandler = (calc,setCalc) => {
    
  if (calc.sign && calc.num) {
    const math = (a, b, sign) =>
      sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "X"
        ? a * b
        : a / b;
    setCalc({
      ...calc,
      res:
        calc.num === "0" && calc.sign === "/"
          ? "Can't divide with 0"
          : math(Number(calc.res), Number(calc.num), calc.sign),
      sign: "",
      num: 0,
    });
  }
};

export const invertClickHandler = (calc,setCalc) => {
  setCalc({
    ...calc,
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: "",
  });
};
export const percentClickHandler = (calc,setCalc) => {
  let num = calc.num ? parseFloat(calc.num) : 0;
  let res = calc.res ? parseFloat(calc.res) : 0;

  setCalc({
    ...calc,
    num: (num /= Math.pow(100, 1)),
    res: (res /= Math.pow(100, 1)),
    sign: "",
  });
};

export const resetClickHandler = (calc,setCalc) => {
  setCalc({
    ...calc,
    sign: "",
    num: 0,
    res: 0,
  });
};

export const toLocaleString = (num) =>
String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

