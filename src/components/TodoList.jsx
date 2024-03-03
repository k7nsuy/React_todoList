import { useState } from "react";

export function TodoList() {
  const todoList = [];
  const reset = "";

  const [todo, setTodo] = useState(todoList);
  const [text, setText] = useState(reset);

  function onChange(textInput) {
    setText(textInput.target.value);
  }

  function addList() {
    setText(reset);
    setTodo(todoList.push(text));
  }

  return (
    <div>
      <input value={text} onChange={onChange} />
      <button onClick={addList}>Add List</button>
      <ul>
        {todoList.map((todo) => {
          for (let i = 0; i < todo.length; i++) {
            <li key={i}>{todo}</li>;
          }
        })}
      </ul>
    </div>
  );
}
