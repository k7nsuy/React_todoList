import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Side } from "./components/Side";

function App() {
  return (
    <>
      <Header />
      <h1 className="active">Hello, Stranger !</h1>
      <Side />
      <Footer />
    </>
  );
}

export default App;
