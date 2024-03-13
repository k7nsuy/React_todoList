import "./App.css";
import { InputReset } from "./components/InputReset";
import { TodoApp } from "./components/TodoList";
import { Count } from "./components/Count";
import { MultiInputs } from "./components/Multi_Inputs";
import { UserList } from "./components/ArrayRendering";
import { CreateNewList } from "./components/CreateNewList";
import { TicTacToe } from "./components/TicTacToe";
import { Fruits } from "./components/SellFruits";

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
      <TodoApp />
      <br></br>
      <hr></hr>
      <h1>* Tic Tac Toe *</h1>
      <TicTacToe />
      <br></br>
      <hr></hr>
      <h1>* Fruits *</h1>
      <Fruits />
    </div>
  );
}

export default App;
