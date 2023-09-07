import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import Asnc from "./components/application/Asnc";

function App() {
  return (
    <div className="App">
      <Application />
      <Asnc />
    </div>
  );
}

export default App;
