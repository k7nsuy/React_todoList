import { useState, useRef } from "react";

export function MultiInputs() {
  let nameWithNickname = {
    name: "",
    nickName: "",
  };

  const refInput = useRef();

  const [fullName, setFullName] = useState(nameWithNickname);
  const { name, nickName } = fullName;

  function onFullName(e) {
    const { name, value } = e.target;

    setFullName({
      ...fullName,
      [name]: value,
    });
  }

  function onReset() {
    setFullName(nameWithNickname);
    refInput.current.focus();
  }

  return (
    <div>
      <input name="name" value={name} onChange={onFullName} ref={refInput} />
      <input name="nickName" value={nickName} onChange={onFullName} />
      <button onClick={onReset}>Reset</button>
      <h2>
        Value : {name} {nickName}
      </h2>
    </div>
  );
}
