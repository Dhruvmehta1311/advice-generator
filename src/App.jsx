import { FaDiceFive } from "react-icons/fa";

/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState();
  const [count, setCount] = useState(0);

  async function AdviceGenerate() {
    const api = "https://api.adviceslip.com/advice";
    const resp = await fetch(api);
    const data = await resp.json();
    setAdvice(data.slip);
    setCount((count) => count + 1);
  }
  return (
    <Advice adviceGen={AdviceGenerate} adviceData={advice} count={count} />
  );
}

// eslint-disable-next-line react/prop-types
function Advice({ adviceGen, adviceData, count }) {
  return (
    <div className="h-screen bg-dark-blue flex flex-col gap-4 items-center justify-center  px-4">
      <div className="bg-dark-grayish-blue max-w-[370px] text-white p-10 rounded-lg text-center flex flex-col gap-4 ">
        <p className="text-neon-green uppercase tracking-wide">
          A d v i c e #{count}
        </p>
        <p className="text-2xl font-semibold">
          {count === 0
            ? "Click on Dice to Generate Advice."
            : `"${adviceData.advice}"`}
        </p>
        <div className=" flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-400"></div>
          <div className="mx-2 flex items-center">
            <div className="w-1 h-4 bg-white rounded-sm"></div>
            <div className="w-1 h-4 bg-white rounded-sm ml-1"></div>
          </div>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
      <div className="bg-green-400 rounded-full p-2">
        <FaDiceFive onClick={adviceGen} className="text-3xl cursor-pointer" />
      </div>

      {/* <button
        onClick={adviceGen}
        className="bg-green-700 py-2 px-2 rounded-md text-white"
      >
        Generate Advice
      </button> */}
    </div>
  );
}

export default App;
