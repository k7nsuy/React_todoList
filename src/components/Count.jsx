import React, { useState } from "react";

export function Count() {
  const firstValue = 0;
  const [count, setCount] = useState(firstValue);

  function Plus() {
    setCount((prev) => prev + 1);
  }

  function Minus() {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={Plus}>증가</button>
      <button onClick={Minus}>감소</button>
    </div>
  );
}
