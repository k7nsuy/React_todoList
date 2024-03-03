import { useState } from "react";

export function InputReset() {
  const reset = "";
  const [text, setText] = useState(reset);

  function onChange(inputText) {
    setText(inputText.target.value);
  }

  function onReset() {
    setText(reset);
  }

  return (
    <div>
      <br></br>
      <input value={text} onChange={onChange} />
      <button onClick={onReset}>Reset</button>
      <h2>Value : {text}</h2>
    </div>
  );
}
