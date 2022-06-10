import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RecoilNexus />
        <Home />
      </RecoilRoot>
    </div>
  );
}

export default App;
