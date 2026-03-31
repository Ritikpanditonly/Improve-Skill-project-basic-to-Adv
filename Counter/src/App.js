import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function decreseHandler() {
    setCount(count - 1);
  }
  function increseHandler() {
    setCount(count + 1);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className='text-[#0398d4] font-medium'>Increment && Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreseHandler} className="border-r-2 text-center w-20  border-[#bfbfbf] text-5xl">
          -
        </button>
        <div>

        </div>
        <button onClick={increseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button>
        rest
      </button>
    </div>
  );
}

export default App;
