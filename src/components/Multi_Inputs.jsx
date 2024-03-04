import { useState } from "react";

export function MultiInputs() {
  let nameWithNickname = {
    name: "",
    nickName: "",
  };

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
  }

  return (
    <div>
      <input name="name" value={name} onChange={onFullName} />
      <input name="nickName" value={nickName} onChange={onFullName} />
      <button onClick={onReset}>Reset</button>
      <h2>
        Value : {name} {nickName}
      </h2>
    </div>
  );
}
