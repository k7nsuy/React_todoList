import { useState, useRef } from "react";

function CreateList({ toDo, onChange, addList }) {
  return (
    <div>
      <input name="toDo" value={toDo} onChange={onChange} />
      <button onClick={addList}>Add List</button>
    </div>
  );
}

function Todo({ todo, onRemove }) {
  return (
    <div>
      <b>{todo.toDo}</b>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
}

function ToDoList({ todo, onRemove }) {
  return (
    <div>
      {todo.map((todo) => (
        <Todo key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </div>
  );
}

export function TodoApp() {
  const todoList = [];
  const reset = {
    toDo: "",
  };
  const count = 1;

  const [text, setText] = useState(reset);
  const { toDo } = text;

  function onChange(e) {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  }

  function onRemove(id) {
    setTodo(todo.filter((todo) => todo.id !== id));
  }

  const [todo, setTodo] = useState(todoList);
  console.log(todo);
  const nextId = useRef(count);

  function addList() {
    const newToDo = {
      id: nextId.current,
      toDo: toDo,
    };
    setTodo([...todo, newToDo]);
    setText(reset);
    nextId.current += 1;
  }

  return (
    <div>
      <CreateList toDo={toDo} onChange={onChange} addList={addList} />
      <ToDoList todo={todo} onRemove={onRemove} />
    </div>
  );
}
