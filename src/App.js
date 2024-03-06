import "./App.css";
import { InputReset } from "./components/InputReset";
import { TodoList } from "./components/TodoList";
import { Count } from "./components/Count";
import { MultiInputs } from "./components/Multi_Inputs";
import { UserList } from "./components/ArrayRendering";
import { CreateNewList } from "./components/CreateNewList";

function App() {
  return (
    <div className="App">
      <h1> * Count *</h1>
      <Count />
      <br></br>
      <hr></hr>
      <h1>* Input *</h1>
      <InputReset />
      <br></br>
      <hr></hr>
      <h1>* Multi Input *</h1>
      <MultiInputs />
      <br></br>
      <hr></hr>
      <h1>* Array Rendering *</h1>
      <UserList />
      <br></br>
      <hr></hr>
      <h1> * Create NewList *</h1>
      <CreateNewList />
      <br></br>
      <hr></hr>
      <h1>* Todo List *</h1>
      <TodoList />
    </div>
  );
}

export default App;
