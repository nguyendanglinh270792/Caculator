import { useEffect, useState } from "react";

function CaculatorReact() {
  const [expresstions, setExpresstions] = useState([""]);
  const [result, setResult] = useState("");
  const handlerReset = () => {
    setExpresstions("");
    setResult("");
  };
  const handlerDel = () => {
    const newArr = [...expresstions];
    newArr.pop();
    setExpresstions(newArr);
  };
  useEffect(() => {
    if (result !== "") {
      setExpresstions([result]);
    }
  }, [result]);
  const handleCaculator = (value) => {
    if (value === "+/-") {
      //check nút + - số âm số dương
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

  const expre = ["%", "/", "*", "ー", "+"];
  const expresCheck = ["*", "/"];
  const handlerResult = () => {
    if (expresstions.length > 0) {
      expresstions.forEach((value, index) => {
        if (value[index] === 0 && value[index + 1] !== ".") {
          expresstions.shift(0);
        }
      });
      // fix lỗi biểu thức bắt đầu bằng + - X /
      if (expre.includes(expresstions[0])) {
        alert("Expresstions is error..!");
      } else if (expresstions.includes("/")) {
        //fix lỗi chia cho 0
        const dviceIndex = expresstions.indexOf("/");
        setResult(
          expresstions[dviceIndex + 1] === "0"
            ? "Error divice by zero..!"
            : parseFloat(eval(expresstions.join("")).toFixed(10))
        );
      } else if (expresstions[expresstions.length - 1] === "%") {
        //fix lỗi % của hàm eval nếu % nằm cuối biểu thức
        const newArr = [...expresstions];
        newArr.pop();
        newArr.push("/100");
        const resul = eval(newArr.join(""));
        setResult(parseFloat(resul.toFixed(2)));
      } else if (expresstions.includes("%")) {
        //fix lỗi % nếu % xuất hiện trong giữa biểu thức
        const indexOfPercent = expresstions.indexOf("%");
        const newArrFront = expresstions.slice(0, indexOfPercent);
        const newArrBehind = expresstions.slice(indexOfPercent + 1);
        const fontEqual = String(eval(newArrFront.join("") + "/100"));
        const equal = [fontEqual, ...newArrBehind];
        setResult(eval(equal.join("")));
      } else if (expresstions.includes("+") || expresstions.includes("-")) {
        // check lỗi sau + - là dấu * ,/
        const indexOfPlus = expresstions.indexOf("+");
        const indexOfSub = expresstions.indexOf("-");
        if (indexOfPlus !== -1) {
          if (expresCheck.includes(expresstions[indexOfPlus + 1])) {
            setResult("Expresstions is error..!");
          }
        }
        if (indexOfSub !== -1) {
          if (expresCheck.includes(expresstions[indexOfSub + 1])) {
            setResult("Expresstions is error..!");
          }
        }
      } else {
        setResult(eval(expresstions.join("")));
      }
    } else {
      setResult("");
      setExpresstions([""]);
    }
  };

  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-slate-500">
      <div className="container rounded-xl ">
        <span className="container2"></span>
        <span className="absolute w-[398px] h-[498px] shadow-x bg-[#1c1c1c] grid grid-cols-4 grid-rows-6 rounded-xl place-items-center z-20 gap-y-4 border-2 border-purple-100/80 ">
          <span className=" w-full h-full col-span-4 row-span-1 text-right mr-6 mt-2 text-white whitespace-pre-wrap overflow-x-auto ">
            <p className=" text-blue-500 top-0 right-4 text-[20px] ">
              {expresstions || ""}
            </p>
            <span className=" text-blue-500 top-10 right-4 text-[16px]">
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
        </span>
      </div>
    </div>
  );
}

export default CaculatorReact;
