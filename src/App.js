import "./App.css";
import { InputReset } from "./components/InputReset";
import { TodoList } from "./components/TodoList";
import { Count } from "./components/Count";
import { MultiInputs } from "./components/Multi_Inputs";

function App() {
  return (
    <div className="App">
      <h1>Count</h1>
      <Count />
      <br></br>
      <hr></hr>
      <h1>Input Reset</h1>
      <InputReset />
      <br></br>
      <hr></hr>
      <h1>Multi Input</h1>
      <MultiInputs />
      <br></br>
      <hr></hr>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
