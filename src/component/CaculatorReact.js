import { useState } from "react";

function CaculatorReact() {
  const [expresstions, setExpresstions] = useState([""]);
  const [result, setResult] = useState("");
  const handlerReset = () => {
    setExpresstions("");
    setResult(0);
  };

  const handleCaculator = (value) => {
    if (value === "+/-") {
      setExpresstions((prevExpresstions) => {
        if (prevExpresstions.includes("-")) {
          return prevExpresstions.slice(1);
        } else {
          return ["-", ...prevExpresstions];
        }
      });
    } else if (value === "ー") {
      setExpresstions([...expresstions, "-"]);
    } else if (value === "÷") {
      setExpresstions([...expresstions, "/"]);
    } else if (value === "×") {
      setExpresstions([...expresstions, "*"]);
    } else if (value === "%") {
      setExpresstions([...expresstions, "%"]);
    } else {
      setExpresstions([...expresstions, value]);
    }
  };
  const handlerDel = () => {
    const newArr = [...expresstions];
    newArr.pop();
    setExpresstions(newArr);
  };

  const expre = ["%", "/", "*", "ー", "+"];
  const handlerResult = () => {
    if (expresstions.length > 0) {
      if (expre.includes(expresstions[0])) {
        alert("Expresstions is error..!");
      } else if (expresstions.includes("/")) {
        const dviceIndex = expresstions.indexOf("/");
        setResult(
          expresstions[dviceIndex + 1] === "0"
            ? "Error divice by zero..!"
            : eval(expresstions)
        );
      } else if (expresstions[expresstions.length - 1] === "%") {
        const newArr = [...expresstions];
        newArr.pop();
        const resul = eval(newArr.join("") + "/100");
        setResult(parseFloat(resul.toFixed(2)));
      } else if (expresstions.includes("%")) {
        const indexOfPercent = expresstions.indexOf("%");
        const newArrFront = expresstions.slice(0, indexOfPercent + 1);
        const newArrBehind = expresstions.slice(indexOfPercent + 1);
        newArrFront.pop();
        const resul = [eval(newArrFront.pop() + "/100"), "+", ...newArrBehind];
        setResult(eval(resul));
      } else {
        setResult(eval(expresstions));
      }
      setExpresstions([eval(expresstions.join(""))]);
    } else {
      setResult(0);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="relative w-[300px] h-[450px] shadow-xl bg-black/90 grid grid-cols-4 grid-rows-6 rounded-xl items-center pl-4 border-4 border-slate-600">
        <span className="col-span-4 row-span-1 text-right p-4 text-white whitespace-pre-wrap overflow-auto h-auto">
          <p className=" text-blue-500 top-0 right-4 text-[25px] ">
            {expresstions || ""}
          </p>
          <span className=" text-blue-500 top-10 right-4 text-[25px]">
            {result}
          </span>
        </span>
        <span
          onClick={() => {
            handlerReset();
          }}
          className="w-[50px] h-[50px] rounded-full border text-center pt-2 font-bold hover:opacity-80 text-[20px] bg-slate-300 cursor-pointer">
          AC
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="w-[50px] h-[50px] rounded-full border text-center pt-2 font-bold hover:opacity-80 text-[20px] bg-slate-300 cursor-pointer">
          +/-
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="w-[50px] h-[50px] rounded-full border text-center pt-2 font-bold hover:opacity-80 text-[20px] bg-slate-300 cursor-pointer">
          %
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-orange-400 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          &#247;
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          7
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          8
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          9
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-orange-400 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          &#215;
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          4
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          5
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          6
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-orange-400 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          ー
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          1
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          2
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          3
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-orange-400 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          +
        </span>
        <span
          onClick={(e) => {
            handlerDel();
          }}
          className="col-span-1 bg-slate-600 w-[50px] h-[50px] rounded-full border pl-2 pt-3 text-white font-bold hover:opacity-80 text-[16px] cursor-pointer">
          DEL
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="col-span-1 bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          0
        </span>
        <span
          onClick={(e) => {
            handleCaculator(e.target.innerText.trim());
          }}
          className="bg-slate-600 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          .
        </span>
        <span
          onClick={() => handlerResult()}
          className="bg-orange-400 w-[50px] h-[50px] rounded-full border text-center pt-2 text-white font-bold hover:opacity-80 text-[20px] cursor-pointer">
          =
        </span>
      </div>
    </div>
  );
}

export default CaculatorReact;
