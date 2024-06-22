import { useState } from "react";
import "../css/useCount.css"

export default function useCount() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
    console.log(count);
  }

  function handleSub() {
    setCount(count - 1);
    console.log(count);
  }

  function handleReset() {
    setCount(0);
    console.log(count);
  }

  return (
    <div className="container">
      <div className="box">
        <p>Count: {count}</p>
        <button className="add" onClick={handleAdd}>
          ADD
        </button>
        <button className="sub" onClick={handleSub}>
          SUB
        </button>
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}
