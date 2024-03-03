import React, { useState, useEffect } from "react";

export function Side() {
  const first = 0;
  const [plus, setPlus] = useState(first);

  function Plus() {
    setPlus((prev) => prev + 1);
  }

  return (
    <div>
      <h1>{plus}</h1>
      <button onClick={Plus}>증가</button>
    </div>
  );
}
