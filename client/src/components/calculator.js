import React, { useState } from "react";

let calcA = [];
let calcB = [];
let numOne = "";
let numTwo = "";
let op = "";
let result = "";
let randomColor = "#222222";

function Calculator() {
  const [calc, setCalc] = useState("0");

  const a = [
    [1, 2, 3, "÷"],
    [4, 5, 6, "x"],
    [7, 8, 9, "-"],
    [0, ".", "C", "+"],
  ];

  const onclickHandle = (e) => {
    if (e.target.value === "C") {
      calcA = [];
      calcB = [];
      numOne = "";
      numTwo = "";
      op = "";
      result = "";
      setCalc("0");
    } else if (parseInt(e.target.value * 1 + 1) && !op) {
      calcA.push(e.target.value);
      numOne = parseInt(calcA.join(""));
      setCalc(numOne);
    } else if (parseInt(e.target.value * 1 + 1) && op) {
      calcB.push(e.target.value);
      numTwo = parseInt(calcB.join(""));
      setCalc(numTwo);
    } else if (parseInt(numOne + 1) && !parseInt(e.target.value * 1 + 1)) {
      op = e.target.value;
      switch (op) {
        case "+":
          result = numOne + (parseInt(numTwo) || 0);
          break;
        case "-":
          result = numOne - (parseInt(numTwo) || 0);
          break;
        case "÷":
          result = numOne / (parseInt(numTwo) || 1);
          break;
        case "x":
          result = numOne * (numTwo === "" ? 1 : numTwo);
          break;
        default:
          break;
      }
      numOne = result;
      calcB = [];
      setCalc(result);
      randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  };

  const onclickCalc = () => {
    if (!(numTwo + 1)) {
      return;
    }
    switch (op) {
      case "+":
        console.log(numOne, numTwo);
        result = numOne + numTwo;
        break;
      case "-":
        console.log(numOne, numTwo);
        result = numOne - numTwo;
        break;
      case "÷":
        console.log(numOne, numTwo);
        result = numOne / numTwo;
        break;
      case "x":
        console.log(numOne, numTwo);

        result = numOne * numTwo;
        break;
      default:
        break;
    }
    numOne = result;
    calcB = [];
    setCalc(result);
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const button = a.map((i) => (
    <tbody key={i}>
      <tr>
        {i.map((i) => (
          <td key={i}>
            <button
              onClick={onclickHandle}
              value={i}
              style={{ width: 80, height: 80, fontSize: 20 }}
            >
              {i}
            </button>
          </td>
        ))}
      </tr>
    </tbody>
  ));

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        readOnly
        type="number"
        value={calc}
        style={{
          width: 325,
          height: 100,
          textAlign: "right",
          fontSize: 50,
          color: randomColor,
        }}
      ></input>
      <table style={{ border: 0 }}>{button}</table>
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={onclickCalc}
                style={{ width: 330, height: 80, fontSize: 50 }}
              >
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
